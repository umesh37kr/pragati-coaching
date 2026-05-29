import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Contact from "../../../models/contact";
await connectDB();
export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();
    if (!name || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        },
      );
    }
    const newContact = new Contact({ name, phone, message });
    await newContact.save();

    return new Response(
      JSON.stringify({ success: true, message: "Contact saved successfully" }),
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
    });
  }
}

export async function GET() {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed",
        error: error,
      },
      { status: 500 },
    );
  }
}
