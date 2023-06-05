import { useState } from "react";
import type { FormData } from "../types/FormData";
import { loginApiCall } from "./loginData";
import { ToastDangerMessage } from "@/components/Utils/ToastMessage";
import { setAccessToken } from "@/redux/auth/slice";
import { useAppDispatch } from "@/redux/hooks";

const useFormState = () => {
  const dispatch = useAppDispatch();

  // creating formaData instance to store login form data
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    remember: true,
  });

  // update formData with new typed text
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // handling remember checbox
  const handleRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      remember: event.target.checked,
    });
  };

  // handling form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void (async () => {
      try {
        const res = await loginApiCall(formData);
        void dispatch(setAccessToken(res.token, res.refreshToken, res.expiry));
      } catch {
        ToastDangerMessage("Something went wrong");
      }
    })();
  };

  return { formData, handleChange, handleRemember, handleSubmit };
};

export default useFormState;
