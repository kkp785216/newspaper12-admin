const publicHttpClient = {
  get: async <T>(url: string) => {
    try {
      const res = await fetch(url);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: T = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error Occured While Network Call.");
    }
  },
  post: async <T>(url: string, params?: object) => {
    try {
      const res = await fetch(url, {
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
  },
  put: async <T>(url: string, params?: object) => {
    try {
      const res = await fetch(url, {
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
  },
  delete: async <T>(url: string, params?: object) => {
    try {
      const res = await fetch(url, {
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
  },
};

export { publicHttpClient };
