import { NextResponse } from 'next/server';
import connection from '@/../lib/db';

export async function GET(req: { url: string | URL }) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("idx");
    try {
        const [rows] = await connection.query(
            `
                SELECT * 
                FROM Community
                WHERE idx = ${url}
            ` 
        );
        return NextResponse.json(rows); // JSON 응답을 반환합니다.
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
