"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { Plus, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { deleteNotice, getNotices } from "@/services/notice.service";

import { INotice } from "@/types/notice";
import { toast } from "sonner";

export default function NoticesPage() {
  const [notices, setNotices] = useState<INotice[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    try {
      const data = await getNotices();

      setNotices(data);
    } catch (error) {
      console.error("Failed to fetch notices", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchNotices();
  }, []);
  const handleDelete = async (id: string) => {
    try {
      await deleteNotice(id);

      toast("Notice deleted successfully", {
        position: "bottom-right",
        style: {
          background: "#10b981", // green-500
          color: "#ffffff",
        },
      });

      fetchNotices();
    } catch (error) {
      toast("Failed to delete notice", {
        position: "bottom-right",
        style: {
          background: "#ef4444", // red-500
          color: "#ffffff",
        },
      });
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Notices</h1>

          <p className="text-muted-foreground">Manage all notices</p>
        </div>

        <Button asChild className="bg-amber-800 hover:bg-amber-700">
          <Link href="/dashboard/notices/create">
            <Plus className="mr-2 h-4 w-4" />
            Add Notice
          </Link>
        </Button>
      </div>

      <div className="mt-6 rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-37.5">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10">
                  Loading notices...
                </TableCell>
              </TableRow>
            ) : notices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10">
                  No notices found
                </TableCell>
              </TableRow>
            ) : (
              notices.map((notice) => (
                <TableRow key={notice._id}>
                  <TableCell className="font-medium">{notice.title}</TableCell>

                  <TableCell>{notice.category}</TableCell>

                  <TableCell>{notice.priority}</TableCell>

                  <TableCell>
                    {format(new Date(notice.createdAt), "dd-MM-yyyy")}
                  </TableCell>

                  <TableCell className="font-sm">
                    {notice.description}
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Pencil className="h-4 w-4" />
                      </Button>

                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(notice._id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
