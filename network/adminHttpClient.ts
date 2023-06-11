import api_endpoints from "@/lib/ApiEndpoints";
import { UserProfileResponse } from "@type/Auth_APIs_Types";
import { ApiErrorType, WithNonNullableKeys } from "@type/Common_APIs_Types";
import { ImageResponse } from "@type/Image_APIs_Types";
import type {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import axios from "axios";
import { AccessTokenManager, tokenManager } from "./accessTokenManager";

type AxiosRequestConfigWithAttemptCount = AxiosRequestConfig & {
  _attemptsBeforeThisRequest?: number;
};
const MAX_TRIES = 3;
const INVALID_ACCESS_TOKEN_ERROR_CODE = "ESEC0003";

class AdminClient {
  private readonly axiosInstance: AxiosInstance;
  private accessToken?: string;

  constructor(tokenManager: AccessTokenManager) {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_ADMIN_API_BASE_PATH,
    });
    this.accessToken = tokenManager.getAccessToken();
    this.setupAuthHeaders();
    this.setupAccessRefreshOnExpiry();
  }

  private setupAuthHeaders() {
    this.axiosInstance.interceptors.request.use((config) => {
      if (config.headers && this.accessToken)
        // this will not run on startup
        (config.headers as AxiosHeaders).set(
          "Authorization",
          `Bearer ${this.accessToken}`
        );
      return config;
    });
  }

  private setupAccessRefreshOnExpiry() {
    this.axiosInstance.interceptors.response.use(undefined, async (error) => {
      if (!getIsStandardError(error)) return Promise.reject(error);

      const isAccessTokenExpired =
        error.response.data.errorCode === INVALID_ACCESS_TOKEN_ERROR_CODE;
      const currAttemptCount = getCurrAttemptCount(error.config);
      const isMaxTriesExceeded = MAX_TRIES <= currAttemptCount;
      if (!isAccessTokenExpired || isMaxTriesExceeded)
        return Promise.reject(error);

      const oldHeaders = (
        error.config.headers as unknown as AxiosHeaders
      ).toJSON(); // This is currently a bug in axios library typings. The toJSON method returns a JS object.
      const newConfig: AxiosRequestConfigWithAttemptCount = {
        ...error.config,
        headers: oldHeaders,
        _attemptsBeforeThisRequest: currAttemptCount,
      };
      return this.axiosInstance(newConfig);
    });
  }

  /**
   * This is the error wrapper, that should be used by all the public class methods
   */
  private callBackend<ResultType>(config: AxiosRequestConfig) {
    this.accessToken = tokenManager.getAccessToken();
    try {
      return this.axiosInstance<ResultType>(config);
    } catch (err) {
      throw this.errorHandler(err);
    }
  }

  /**
   * @returns image response with success message and download url
   */
  public async uploadImage(formData: FormData) {
    const endpoint = api_endpoints.UPLOAD_IMAGE;
    const url = `${endpoint}`;
    const response = await this.callBackend<ImageResponse>({
      url,
      method: "POST",
      data: formData,
    });
    return response.data;
  }

  /**
   * @returns image response with success message and download url
   */
  public async uploadImages(formData: FormData) {
    const endpoint = api_endpoints.UPLOAD_IMAGES;
    const url = `${endpoint}`;
    const response = await this.callBackend<ImageResponse[]>({
      url,
      method: "POST",
      data: formData,
    });
    return response.data;
  }

  /** get all authors */
  public async getAllAuthors() {
    const endpoint = api_endpoints.AUTHORS_ALL_GET_API;
    const url = `${endpoint}`;
    const response = await this.callBackend<UserProfileResponse[]>({
      url,
      method: "GET",
      data: { cache: "no-store" },
    });
    return response.data;
  }

  /** Get my profile */
  public async getMyProfile() {
    const endpoint = api_endpoints.USER_PROFILE_GTE_API;
    const url = `${endpoint}`;
    const response = await this.callBackend<UserProfileResponse>({
      url,
      data: { cache: "no-store" },
    });
    return response.data;
  }

  private errorHandler(error: unknown) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return "Error Occured While Network Call.";
  }
}

function getIsStandardError(
  err: unknown
): err is WithNonNullableKeys<AxiosError<ApiErrorType>, "response" | "config"> {
  return Boolean(axios.isAxiosError(err) && err.response && err.config);
}

/**
 * The _attemptCount key tells us how many attempts were run prior the the given request
 */
function getCurrAttemptCount(config: AxiosRequestConfigWithAttemptCount) {
  const oldCount = config._attemptsBeforeThisRequest;
  const newCount = oldCount ? oldCount + 1 : 1;
  return newCount;
}

const adminClient = new AdminClient(tokenManager);

export { adminClient };
