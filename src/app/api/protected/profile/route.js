import { NextResponse } from "next/server";
import supabase from "../../../../../lib/supabase";

export async function GET(request) {
    const authentication = await request.headers.get("authorization");
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
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
        return NextResponse.json(
            {
                success: false,
                error: error?.message || "Unauthorized",
            },
            { status: 401 }
        );
    }

    return NextResponse.json(
        {
            success: true,
            user,
        },
        { status: 200 }
    );
}