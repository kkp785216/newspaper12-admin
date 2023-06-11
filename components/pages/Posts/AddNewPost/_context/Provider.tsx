import { ChangeEvent, useState } from "react";
import { AddPostContext } from "./addPostContext";

type AddPostContextType = {
  formData: {
    title: string;
    slug: string;
    description: string;
  };
  categories: string[];
  tags: string[];
  imgUrl: string;
  content: null | string;
  template: 1 | 2 | 3;
  author: string;
  allowComment: boolean;
  publishedAt: string;
};

type AddPostContextValueType = AddPostContextType & {
  formDataDispatch: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  postDispatch: (action: AddPostContextActionType) => void;
};

type CategoryAddAction = {
  type: "categories-add";
  payload: AddPostContextType["categories"][0];
};
type CategoryRemoveAction = {
  type: "categories-remove";
  payload: AddPostContextType["categories"][0];
};
type TagAddAction = {
  type: "tags-add";
  payload: AddPostContextType["tags"][0];
};
type TagRemoveAction = {
  type: "tags-remove";
  payload: AddPostContextType["tags"][0];
};
type ImgUrlAction = {
  type: "imageUrl";
  payload: AddPostContextType["imgUrl"];
};
type ContentAction = {
  type: "content";
  payload: AddPostContextType["content"];
};
type AuthorAction = {
  type: "author";
  payload: AddPostContextType["author"];
};
type AllowCommentAction = {
  type: "allow-comment";
  payload: AddPostContextType["allowComment"];
};
type PublishedAtAction = {
  type: "publishedAt";
  payload: AddPostContextType["publishedAt"];
};

type AddPostContextActionType =
  | CategoryAddAction
  | CategoryRemoveAction
  | TagAddAction
  | TagRemoveAction
  | ImgUrlAction
  | ContentAction
  | AuthorAction
  | AllowCommentAction
  | PublishedAtAction;

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [postData, setPostData] = useState<AddPostContextType>({
    formData: {
      title: "",
      slug: "",
      description: "",
    },
    categories: [],
    tags: [],
    imgUrl: "",
    content: null,
    template: 1,
    author: "",
    allowComment: true,
    publishedAt: "",
  });

  const formDataDispatch = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostData({
      ...postData,
      formData: {
        ...postData.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  const postDispatch = (action: AddPostContextActionType) => {
    switch (action.type) {
      case "categories-add":
        {
          const catArray = new Set(postData.categories);
          catArray.add(action.payload);
          setPostData({
            ...postData,
            categories: Array.from(catArray),
          });
        }
        break;
      case "categories-remove":
        {
          const catArray = new Set(postData.categories);
          catArray.delete(action.payload);
          setPostData({
            ...postData,
            categories: Array.from(catArray),
          });
        }
        break;
      case "tags-add":
        {
          const catArray = new Set(postData.tags);
          catArray.add(action.payload);
          setPostData({
            ...postData,
            categories: Array.from(catArray),
          });
        }
        break;
      case "tags-remove":
        {
          const catArray = new Set(postData.tags);
          catArray.delete(action.payload);
          setPostData({
            ...postData,
            categories: Array.from(catArray),
          });
        }
        break;
      case "allow-comment":
        setPostData({
          ...postData,
          allowComment: action.payload,
        });
        break;
      case "author":
        setPostData({
          ...postData,
          author: action.payload,
        });
        break;
      case "content":
        setPostData({
          ...postData,
          content: action.payload,
        });
        break;
      case "imageUrl":
        setPostData({
          ...postData,
          imgUrl: action.payload,
        });
        break;
      case "publishedAt":
        setPostData({
          ...postData,
          publishedAt: action.payload,
        });
        break;
      default:
    }
  };

  const value: AddPostContextValueType = {
    ...postData,
    postDispatch,
    formDataDispatch,
  };

  return (
    <AddPostContext.Provider value={value}>{children}</AddPostContext.Provider>
  );
};

export { Provider };
export type { AddPostContextValueType, AddPostContextActionType };
