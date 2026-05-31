"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { noticeSchema, NoticeFormData } from "@/validations/notice.schema";

interface NoticeFormProps {
  initialData?: NoticeFormData;
  onSubmit: (data: NoticeFormData) => Promise<void>;
  isEdit?: boolean;
}

const NoticeForm = ({
  initialData,
  onSubmit,
  isEdit = false,
}: NoticeFormProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset: resetForm,
    formState: { errors },
  } = useForm<NoticeFormData>({
    resolver: zodResolver(noticeSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      category: "",
      priority: "",
    },
  });

  const submitHandler = async (data: NoticeFormData) => {
    try {
      setLoading(true);

      await onSubmit(data);
      resetForm();
      toast(
        isEdit ? "Notice updated successfully" : "Notice created successfully",
        {
          position: "bottom-right",
          style: {
            background: "#10b981",
            color: "#fff",
          },
        },
      );
      router.push("/dashboard/notices");
    } catch (error) {
      console.error(error);

      toast(isEdit ? "Failed to update notice" : "Failed to create notice", {
        position: "bottom-right",
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>{isEdit ? "Edit Notice" : "Create Notice"}</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          <div>
            <Input placeholder="Notice Title" {...register("title")} />

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              rows={6}
              placeholder="Description"
              {...register("description")}
            />

            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Select
                value={watch("category")}
                onValueChange={(value) => setValue("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="Exam">Exam</SelectItem>
                    <SelectItem value="Holiday">Holiday</SelectItem>
                    <SelectItem value="Admission">Admission</SelectItem>
                    <SelectItem value="Event">Event</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <Select
                value={watch("priority")}
                onValueChange={(value) => setValue("priority", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors.priority && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.priority.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-800 hover:bg-amber-700"
          >
            {loading
              ? isEdit
                ? "Updating..."
                : "Saving..."
              : isEdit
                ? "Update Notice"
                : "Save Notice"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NoticeForm;
