import { NextResponse } from "next/server";
import connection from "../../../../../lib/db";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchValue = url.searchParams.get("searchValue");
    const searchState = url.searchParams.get("searchState");

    const [community, components] = [
        `
            SELECT * 
            FROM Community 
            WHERE title LIKE '%${searchValue}%'
        `,
        `
            SELECT * 
            FROM Components
            WHERE componentName LIKE '%${searchValue}%'
        `
    ];

    try {
        const [rows] = await connection.query(
            searchState === "community"
                ? community
                : components
        );

        return NextResponse.json(rows);
    } catch(error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "검색 결과가 잘못되었습니다." }, { status: 500 });
    }
}