import type { CategoryGetResult } from "./Category_APIs_Type";

type TagGetResult = Omit<CategoryGetResult, "parent">;

export type { TagGetResult };
