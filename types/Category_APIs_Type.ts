type CategoryAllGetResult = {
  _id: string;
  name: string;
  slug: string;
  parent: CategoryAllGetResult[0];
  description?: string;
  createdAt: string;
  updatedAt: string;
}[];

export type { CategoryAllGetResult };
