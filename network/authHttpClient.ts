const authHttpClient = {
  get: async (url: string) => {
    try {
      const res = await fetch(url);
      return res;
    } catch (error) {
      throw new Error("Error Occured While Network Call.");
    }
  },
};

export { authHttpClient };
