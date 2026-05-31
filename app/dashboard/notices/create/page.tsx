"use client";
import NoticeForm from "../components/NoticeForm";
import { createNotice } from "@/services/notice.service";
import { NoticeFormData } from "@/validations/notice.schema";

export default function CreateNoticePage() {
  const handleCreate = async (data: NoticeFormData) => {
    await createNotice(data);
  };

  return (
    <div className="container py-10">
      <NoticeForm onSubmit={handleCreate} />
    </div>
  );
}
