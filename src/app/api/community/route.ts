import { NextResponse } from 'next/server';
import connection from '@/../lib/db'; // 데이터베이스 연결 설정을 가져옵니다.
import path from "path";
import fs from "fs";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);  // 쿼리에서 page 파라미터를 가져옵니다.
    const limit = parseInt(url.searchParams.get('limit') || '10', 10); // 쿼리에서 limit 파라미터를 가져옵니다.
    const offset = (page - 1) * limit; // 페이지 번호에 따라 OFFSET 계산

    try {
        const [rows] = await connection.query('SELECT * FROM Community ORDER BY idx DESC LIMIT ? OFFSET ?', [limit, offset]);
        return NextResponse.json(rows); // JSON 응답을 반환합니다.
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
