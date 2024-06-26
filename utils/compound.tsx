import Toast from "@/components/toast";
import { toast } from "react-toastify";

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  return toast(<Toast />, { closeButton: false });
};
