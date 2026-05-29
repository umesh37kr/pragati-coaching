import { z } from "zod";

export const noticeSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),

  description: z.string().min(10, "Description must be at least 10 characters"),

  category: z.string().min(1, "Category is required"),

  priority: z.string().min(1, "Priority is required"),
});

export type NoticeFormData = z.infer<typeof noticeSchema>;
