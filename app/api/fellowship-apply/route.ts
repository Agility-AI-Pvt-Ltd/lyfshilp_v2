import { ensureFellowshipApplicationsTable, getDb } from "@/src/lib/db";

type FellowshipApplicationPayload = {
  name?: string;
  email?: string;
  phone?: string;
  schoolName?: string;
  class?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FellowshipApplicationPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const schoolName = body.schoolName?.trim() ?? "";
    const studentClass = body.class?.trim() ?? "";

    if (!name || !email || !phone || !schoolName || !studentClass) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!phonePattern.test(phone)) {
      return Response.json(
        { error: "Please enter a valid 10-digit phone number." },
        { status: 400 },
      );
    }

    await ensureFellowshipApplicationsTable();

    const sql = getDb();

    await sql`
      INSERT INTO fellowship_applications (name, email, phone, school_name, class)
      VALUES (${name}, ${email}, ${phone}, ${schoolName}, ${studentClass})
    `;

    return Response.json({ success: true });
  } catch (error) {
    console.error("Fellowship application submission failed:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
