"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import NoticeForm from "../../components/NoticeForm";

import { getNoticeById, updateNotice } from "@/services/notice.service";
import { NoticeFormData } from "@/types/notice";

export default function EditNoticePage() {
  const params = useParams();

  const [notice, setNotice] = useState<NoticeFormData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNoticeById(params.id as string);

        setNotice(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [params.id]);

  const handleUpdate = async (formData: NoticeFormData) => {
    await updateNotice(params.id as string, formData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-10">
      <NoticeForm initialData={notice} onSubmit={handleUpdate} isEdit />
    </div>
  );
}
