import { NextResponse } from "next/server";
import supabase from "@/app/lib/supabase";
import { verifyToken } from "@/middleware/verify";
//STAGE 3 Done this Verification of token in Stage 2 
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
    const user = await verifyToken(token);

    return NextResponse.json(
        {
            success: true,
            id: user.id,
            email: user.email,
            created_at: user.created_at,
        },
        {
            status: 200,
        }
    );
}