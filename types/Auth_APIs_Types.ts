type LoginRequestBody = {
  email: string;
  password: string;
};

type UserProfileResponse = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
};

type LoginResponse = {
  profile: UserProfileResponse;
  token: string;
  refreshToken: string;
  expiry: number;
};

export type { LoginRequestBody, UserProfileResponse, LoginResponse };
