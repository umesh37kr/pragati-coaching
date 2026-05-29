"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "date-fns";
import { useEffect, useState } from "react";
import { getNotices } from "@/services/notice.service";
import { INotice } from "@/types/notice";

// const notices = [
//   {
//     _id: "1",
//     title: "Exam Schedule Released",
//     description:
//       "The exam schedule for the upcoming semester has been released. Please check the notice board for details.",
//     category: "Exams",
//     priority: "High",
//     createdAt: "2024-06-01T10:00:00Z",
//   },
//   {
//     _id: "2",
//     title: "Holiday Announcement",
//     description:
//       "The institute will be closed on 15th June for a public holiday. Please plan accordingly.",
//     category: "General",
//     priority: "Medium",
//     createdAt: "2024-06-05T12:00:00Z",
//   },
// ];
const Notice = () => {
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
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto py-10">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold">Notice Board</h1>

            <p className="text-muted-foreground mt-3">
              Stay updated with latest institute announcements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice) => (
              <Card
                key={notice._id}
                className="hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Badge>{notice.category}</Badge>

                    <Badge variant="destructive">{notice.priority}</Badge>
                  </div>

                  <CardTitle>{notice.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="line-clamp-4">{notice.description}</p>

                  <div className="mt-4 text-sm text-muted-foreground">
                    {formatDate(new Date(notice.createdAt), "dd-MM-yyyy")}
                    {/* format(new Date(2014, 1, 11), "yyyy-MM-dd") */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
