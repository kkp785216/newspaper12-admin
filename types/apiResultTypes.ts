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

export type { LoginRequestBody, UserProfileResponse };
