import { NextResponse } from "next/server";
import connection from "../../../../../lib/db";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchValue = url.searchParams.get("searchValue");

    try {
        const [rows] = await connection.query(`
            SELECT * 
            FROM Community 
            WHERE title LIKE '%${searchValue}%'
        `);
        return NextResponse.json(rows);
    } catch(error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "검색 결과가 잘못되었습니다." }, { status: 500});
    }
}