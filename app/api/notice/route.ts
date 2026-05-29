import Notice from "@/models/Notice";

export async function POST(request: Request) {
  try {
    const { title, description, category, priority } = await request.json();
    if (!title || !description) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 },
      );
    }

    const notice = new Notice({ title, description, category, priority });
    await notice.save();

    return new Response(JSON.stringify(notice), { status: 201 });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
    });
  }
}

export async function GET() {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(notices), { status: 200 });
  } catch (error) {
    console.error("Error fetching notices:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch notices" }), {
      status: 500,
    });
  }
}
