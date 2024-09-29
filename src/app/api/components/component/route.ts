import { NextResponse } from 'next/server';
import connection from '@/../lib/db'; // 데이터베이스 연결 설정을 가져옵니다.

// ex. url이 /Card/card1 로 되어져 있으면 card1 의 code 들을 불러옴
export async function GET(req: { url: string | URL }) {
    const { searchParams } = new URL(req.url);
    const componentName = searchParams.get("componentName");

    console.log("componentName", componentName);
    
    try {
        const [rows] = await connection.query(
            `
                SELECT * 
                FROM Code
                WHERE componentName=${componentName}
            `
        );
        console.log(rows);
        return NextResponse.json(rows); // JSON 응답을 반환합니다.
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
