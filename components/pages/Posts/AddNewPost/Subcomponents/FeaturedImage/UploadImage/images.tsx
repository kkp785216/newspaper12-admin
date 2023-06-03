"use client";

import React, { useState, ChangeEvent } from "react";
import { adminClient } from "@/network/adminHttpClient";
import { toast } from "react-toastify";
import { ToastSuccessMessage } from "@/components/Utils/ToastMessage";

function ImageUploaders() {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    files && setSelectedImages(files);
  };

  const handleImageUpload = () => {
    ToastSuccessMessage("hello");
    if (selectedImages) {
      const formData = new FormData();
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append("image", selectedImages[i]);
      }

      adminClient
        .post("/upload/images", formData)
        .then(() => {
          // Handle successful upload
          toast("Image successfully uploaded");
        })
        .catch(() => {
          // Handle upload error
          toast("Image upload faild", { type: "error" });
        });
    }
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
