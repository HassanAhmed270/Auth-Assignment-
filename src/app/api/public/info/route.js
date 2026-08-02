import { NextResponse } from "next/server";
import supabase from "../../../../../lib/supabase";

export async function GET() {

    return NextResponse.json(
        {
            message: "Public API route is working!",
        },
        { status: 200 }
    );
}