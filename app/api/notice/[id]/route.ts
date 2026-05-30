import connectDB from "@/lib/mongodb";
import Notice from "@/models/Notice";
import mongoose from "mongoose";
import { NextRequest } from "next/server";
import { noticeSchema } from "@/validations/notice.schema";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// DELETE /api/notice --> delete notice
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid notice id" }, { status: 400 });
    }

    const deletedNotice = await Notice.findByIdAndDelete(id);

    if (!deletedNotice) {
      return Response.json(
        {
          error: "Notice not found",
        },
        {
          status: 404,
        },
      );
    }

    return Response.json(
      {
        message: "Notice deleted successfully",
      },
      {
        status: 200,
      },
    );
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

// PUT /api/notice --> update notice
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid notice id" }, { status: 400 });
    }

    const body = await request.json();

    const validated = noticeSchema.safeParse(body);

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

    const updatedNotice = await Notice.findByIdAndUpdate(id, validated.data, {
      new: true,
      runValidators: true,
    });

    if (!updatedNotice) {
      return Response.json(
        {
          error: "Notice not found",
        },
        {
          status: 404,
        },
      );
    }

    return Response.json(updatedNotice, {
      status: 200,
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
