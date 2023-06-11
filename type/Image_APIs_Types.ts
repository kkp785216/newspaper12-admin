type ImageRequestBody = FormData;

type ImageResponse = {
  success: string;
  path: string;
  filename: string;
  fullpath: string;
  images: {
    name: string;
    downloadURL: string;
  }[];
};

export type { ImageRequestBody, ImageResponse };
