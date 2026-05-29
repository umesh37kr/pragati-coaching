import axios from "axios";
import { NoticeFormData } from "@/validations/notice.schema";

export const createNotice = async (data: NoticeFormData) => {
  const response = await axios.post("/api/notice", data);

  return response.data;
};
