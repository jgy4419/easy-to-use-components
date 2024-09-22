import { NextResponse } from 'next/server';
import connection from '@/../lib/db'; // 데이터베이스 연결 설정을 가져옵니다.

export async function GET() {
    try {
        const [rows] = await connection.query(
            `
                SELECT categoryName
                FROM ComponentItem
            `
        );
        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error : " + error);
        return NextResponse.json({ error: "Fail to fetch data "}, { status: 500 });
    }
}