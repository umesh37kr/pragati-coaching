export interface INotice {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeFormData {
  title: string;
  description: string;
  category: string;
  priority: string;
}
