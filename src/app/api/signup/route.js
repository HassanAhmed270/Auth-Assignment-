import { NextResponse } from "next/server";
import supabase from "../../../../lib/supabase";

export async function POST(request) {
  const { email, password } = await request.json();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    user: data.user,
    session: data.session,
  },{ status: 201 });
}