import type { CategoryGetResult } from "./Category_APIs_Type";
import type { TagGetResult } from "./Tag_APIs_Types";
import type { UserProfileResponse } from "./Auth_APIs_Types";

type ArticleAllGetResult = {
  articles: {
    _id: string;
    categories: CategoryGetResult[];
    tags: TagGetResult[];
    title: string;
    description: string;
    author: UserProfileResponse;
    status: "published" | "draft";
    views: number;
    url: string;
    imgUrl: null | string;
    content: null | string;
    contentType: ContentType;
    template: 1 | 2 | 3;
    allowComment: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  page: number;
  limit: number;
  maxLimit: number;
  totalArticles: number;
};

type ContentType = "post" | "video" | "audio" | "news";

export type { ArticleAllGetResult, ContentType };
