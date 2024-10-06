import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'; // NextRequest로 변경
import connection from '@/../lib/db';

export async function GET(req: NextRequest) { // req 타입을 NextRequest로 변경
    const { searchParams } = new URL(req.url); // req.url을 사용하여 URL 객체 생성
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
