import connectDB from "../../../lib/mongodb";
import Contact from "../../../models/contact";
await connectDB();
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        },
      );
    }
    const newContact = new Contact({ name, email, message });
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
