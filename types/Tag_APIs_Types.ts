import type { CategoryAllGetResult } from "./Category_APIs_Type";

type TagAllGetResult = Omit<CategoryAllGetResult[0], "parent">[];

export type { TagAllGetResult };
