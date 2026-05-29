import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { formatDate } from "date-fns";
import Link from "next/link";
const notices = [
  {
    _id: "1",
    title: "Notice 1",
    category: "General",
    priority: "High",
    createdAt: "2024-06-01T10:00:00Z",
  },
  {
    _id: "2",
    title: "Notice 2",
    category: "Updates",
    priority: "Medium",
    createdAt: "2024-06-02T12:00:00Z",
  },
  {
    _id: "3",
    title: "Notice 3",
    category: "Events",
    priority: "Low",
    createdAt: "2024-06-03T14:00:00Z",
  },
];
export default function NoticesPage() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Notices</h1>
            <p className="text-muted-foreground">Manage all notices</p>
          </div>
          <div className="mr-20">
            <Button asChild className="bg-amber-800 hover:bg-amber-700">
              <Link href="/dashboard/notices/create">
                <Plus />
                Add Notice
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {notices.map((notice) => (
                <TableRow key={notice._id}>
                  <TableCell>{notice.title}</TableCell>

                  <TableCell>{notice.category}</TableCell>

                  <TableCell>{notice.priority}</TableCell>

                  <TableCell>
                    {formatDate(notice.createdAt, "dd-MM-yyyy")}
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Pencil />
                      </Button>

                      <Button size="icon" variant="destructive">
                        <Trash />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
