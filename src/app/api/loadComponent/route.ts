import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { jsPath } = await req.json();
        if (!jsPath) throw new Error("Missing jsPath");

        const Component = await import(`@/app/componentList${jsPath}`);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to load component" }, { status: 500 });
    }
}
