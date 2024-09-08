import { NextResponse } from 'next/server';
import connection from '@/../lib/db'; // 데이터베이스 연결 설정을 가져옵니다.

export async function GET(req: { url: string | URL }) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("componentName");

    try {
        const [rows] = await connection.query(
            `
                SELECT * 
                FROM Code
                WHERE idx = ${url}
            ` 
        );
        console.log(rows);
        return NextResponse.json(rows); // JSON 응답을 반환합니다.
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
