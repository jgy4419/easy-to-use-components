// app/api/getData/route.ts
import { NextResponse } from 'next/server';
import { useRouter } from "next/navigation";
import connection from '@/../lib/db'; // 데이터베이스 연결 설정을 가져옵니다.

export async function GET() {
    try {
        const [rows] = await connection.query('SELECT * FROM Community');
        console.log(rows);
        return NextResponse.json(rows); // JSON 응답을 반환합니다.
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
