const api_endpoints = {
  /* Articles APIs */
  ARTICLES_ALL_GET_API: "/articles/all",
  ARTICLE_SINGLE_GET_API: "/article",
  ARTICLE_ADD_API: "/article",
  ARTICLE_BY_CATEGORY_GET_API: "/articles/bycategory",
  ARTICLE_BY_TAG_GET_API: "/articles/bytag",

  /* Auth APIs */
  AUTH_LOGIN_API: "/login",
  AUTH_REGISTER_API: "/register",
  AUTH_REFRESH_TOKEN_API: "/refreshtoken",

  /* Categories APIs */
  CATEGORY_ALL_GET_API: "/categories",
  CATEGORY_SINGLE_GET_API: "/category",
  CATEGORY_ADD_API: "/category",

  /* Tags APIs */
  Tag_ALL_GET_API: "/tags",
  Tag_SINGLE_GET_API: "/tag",
  Tag_ADD_API: "/tag",

  /* Image Upload */
  UPLOAD_IMAGE: "/upload/image",
  UPLOAD_IMAGES: "/upload/images",

  AUTHORS_ALL_GET_API: "/authors/all",

  /* Users APIs */
  USER_PROFILE_GTE_API: "/profile",
};

export default api_endpoints;
