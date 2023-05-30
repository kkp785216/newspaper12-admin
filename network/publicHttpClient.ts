type Options = {
  baseURL: string;
};

class PublicHttpClient {
  private baseURL: string;

  constructor(options: Options) {
    this.baseURL = options.baseURL;
  }

  async get<T>(url: string) {
    try {
      const res = await fetch(this.baseURL + url);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: T = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error Occured While Network Call.");
    }
  }

  async post<T>(url: string, params?: object) {
    try {
      const res = await fetch(this.baseURL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: params ? JSON.stringify(params) : undefined,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: T = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error Occured While Network Call.");
    }
  }

  async put<T>(url: string, params?: object) {
    try {
      const res = await fetch(this.baseURL + url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: params ? JSON.stringify(params) : undefined,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: T = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error Occured While Network Call.");
    }
  }

  async delete<T>(url: string, params?: object) {
    try {
      const res = await fetch(this.baseURL + url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: params ? JSON.stringify(params) : undefined,
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: T = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error Occured While Network Call.");
    }
  }
}

const publicHttpClient = new PublicHttpClient({
  baseURL: process.env.NEXT_PUBLIC_UNPROTECTED_API_BASE_PATH || "",
});

export { publicHttpClient };
