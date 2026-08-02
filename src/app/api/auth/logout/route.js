import { NextResponse } from "next/server";
import supabase from "@/app/lib/supabase";
import { verifyToken } from "@/middleware/verify";

export async function POST(request) {
  const authentication = request.headers.get("authorization");

  if (!authentication?.startsWith("Bearer ")) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid authorization header",
      },
      { status: 401 }
    );
  }

  const token = authentication.split(" ")[1];

  try {
    await verifyToken(token);

    const { error } = await supabase.auth.signOut();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 401 }
    );
  }
}