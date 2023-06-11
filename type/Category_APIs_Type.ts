type CategoryGetResult = {
  _id: string;
  name: string;
  slug: string;
  parent: CategoryGetResult;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type { CategoryGetResult };
