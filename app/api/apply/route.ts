import { NextRequest, NextResponse } from "next/server";

export type ApplyRequestBody = {
  fullName: string;
  age: string;
  city: string;
  maritalStatus: string;
  height: string;
  contact: string;
  email: string;
  instagram?: string;
  facebook?: string;
  pageant?: string;
};

function validateApplyBody(body: unknown): body is ApplyRequestBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.fullName === "string" &&
    b.fullName.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.contact === "string" &&
    b.contact.trim().length >= 10
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!validateApplyBody(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing required fields (name, email, contact)." },
        { status: 400 }
      );
    }
    const applicationId = `app_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    return NextResponse.json({ success: true, applicationId });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
