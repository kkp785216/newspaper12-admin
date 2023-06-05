"use client";

import React, { useState, ChangeEvent } from "react";
import { adminClient } from "@/network/adminHttpClient";
import {
  ToastDangerMessage,
  ToastSuccessMessage,
} from "@/components/Utils/ToastMessage";

function ImageUploaders() {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    files && setSelectedImages(files);
  };

  const handleImageUpload = () => {
    void (async () => {
      if (selectedImages) {
        const formData = new FormData();
        for (let i = 0; i < selectedImages.length; i++) {
          formData.append("image", selectedImages[i]);
        }

        try {
          await adminClient.uploadImages(formData);
          ToastSuccessMessage("Image successfully uploaded");
        } catch (error) {
          ToastDangerMessage("Image upload faild");
        }
      }
    })();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button onClick={handleImageUpload} disabled={!selectedImages}>
        Upload
      </button>
    </div>
  );
}

export default ImageUploaders;
