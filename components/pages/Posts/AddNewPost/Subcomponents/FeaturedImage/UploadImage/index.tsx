"use client";

import React, { useState, ChangeEvent } from "react";
import { adminClient } from "@/network/adminHttpClient";
import { toast } from "react-toastify";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    file && setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      adminClient
        .post("/upload/image", formData)
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
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload} disabled={!selectedImage}>
        Upload
      </button>
    </div>
  );
}

export default ImageUploader;
