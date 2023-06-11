class AccessTokenManager {
  private accessToken?: string;

  public setAccessToken(token: string | undefined) {
    this.accessToken = token;
  }

  public getAccessToken(): string | undefined {
    return this.accessToken;
  }
}

const tokenManager = new AccessTokenManager();

export { tokenManager, AccessTokenManager };
