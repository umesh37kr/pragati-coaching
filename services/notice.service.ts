import axios from "axios";
import { NoticeFormData } from "@/validations/notice.schema";
import { INotice } from "@/types/notice";

export const createNotice = async (data: NoticeFormData) => {
  const response = await axios.post("/api/notice", data);

  return response.data;
};

export const getNotices = async (): Promise<INotice[]> => {
  console.log("getting this call here...");
  const response = await axios.get("/api/notice");

  return response.data;
};

export const getNoticeById = async (id: string): Promise<INotice> => {
  const response = await axios.get(`/api/notice/${id}`);

  return response.data;
};

export const updateNotice = async (id: string, data: NoticeFormData) => {
  const response = await axios.put(`/api/notice/${id}`, data);

  return response.data;
};

export const deleteNotice = async (id: string) => {
  const response = await axios.delete(`/api/notice/${id}`);

  return response.data;
};
