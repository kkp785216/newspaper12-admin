import React, { useState, ChangeEvent } from "react";
import { adminClient } from "@/network/adminHttpClient";
import {
  ToastDangerMessage,
  ToastSuccessMessage,
} from "@/components/Utils/ToastMessage";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    file && setSelectedImage(file);
  };

  const handleImageUpload = () => {
    void (async () => {
      if (selectedImage) {
        const formData = new FormData();
        formData.append("image", selectedImage);

        try {
          await adminClient.uploadImage(formData);
          ToastSuccessMessage("Image successfully uploaded");
        } catch (error) {
          ToastDangerMessage("Image upload faild");
        }
      }
    })();
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
