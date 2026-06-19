import connectDB from "@/lib/mongodb";
import Notice from "@/models/Notice";
import { noticeSchema } from "@/validations/notice.schema";

// POST /api/notice --> create notice
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const validated = noticeSchema.safeParse(body);
    console.log("validated..", validated.data);
    if (!validated.success) {
      return Response.json(
        {
          error: validated.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const notice = await Notice.create(validated.data);
    console.log("notice created..", notice);
    return Response.json(notice, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}

// GET /api/notice --> get all notices
export async function GET() {
  try {
    await connectDB();

    const notices = await Notice.find().sort({ createdAt: -1 }).lean();

    return Response.json(notices, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
