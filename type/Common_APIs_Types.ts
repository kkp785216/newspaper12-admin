type ApiErrorType = {
  errorCode: string;
  message: string;
};

type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

type WithNonNullableKeys<T, K extends keyof T> = T &
  Required<RequiredNotNull<Pick<T, K>>>;

export type { ApiErrorType, WithNonNullableKeys };
