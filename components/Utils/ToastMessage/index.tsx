import { toast } from "react-toastify";

export const ToastSuccessMessage = (msg: string) => {
  toast.success(msg);
};
export const ToastDefaultMessage = (msg: string) => {
  toast(msg);
};
export const ToastInfoMessage = (msg: string) => {
  toast.info(msg);
};
export const ToastDangerMessage = (msg: string) => {
  toast.error(msg);
};
export const ToastWarnMessage = (msg: string) => {
  toast.warn(msg);
};
