import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

/* All of the below requests will return either the expected response, which can 
be passed in via Generic Type, or throw an error with the contents being the error 
message obtained from server.
Benefits: 
* No optional typing for the response data. You get what you ask for
* The errors can be handled in dedicated catch blocks, where you know the parameter is a string.
*/
class AdminClient {
  private readonly axiosInstance: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
  }

  /**
   * This Method can be Used to Perform a get request to public apis.
   * @param url
   * @param params
   * @returns
   */
  async get<T = unknown>(url: string, params?: Record<string, string>) {
    try {
      const response = await this.axiosInstance.get<T>(url, { params });
      return response.data;
    } catch (error) {
      throw this.errorHandler(error);
    }
  }

  async post<T = unknown>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ) {
    try {
      const response = await this.axiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw this.errorHandler(error);
    }
  }

  put<T = unknown>(url: string, data?: object) {
    try {
      return this.axiosInstance.put<T>(url, data);
    } catch (error) {
      throw this.errorHandler(error);
    }
  }

  delete<T = unknown>(url: string, data?: object) {
    try {
      return this.axiosInstance.delete<T>(url, data);
    } catch (error) {
      throw this.errorHandler(error);
    }
  }

  private errorHandler(error: unknown) {
    if (axios.isAxiosError(error)) {
      return error.message;
    }
    return "Error Occured While Network Call.";
  }
}

const adminClient = new AdminClient({
  baseURL: process.env.NEXT_PUBLIC_ADMIN_API_BASE_PATH,
});

export { adminClient };
