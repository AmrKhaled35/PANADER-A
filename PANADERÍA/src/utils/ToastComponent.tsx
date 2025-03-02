import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const showSuccessToast = (message: string): void => {
  toast.success(message, defaultOptions);
};

export const showErrorToast = (message: string): void => {
  toast.error(message, defaultOptions);
};

export const showInfoToast = (message: string): void => {
  toast.info(message, defaultOptions);
};

export const showWarningToast = (message: string): void => {
  toast.warn(message, defaultOptions);
};