import { NextRequest, NextResponse } from 'next/server';
import connection from '@/../lib/db'; // 데이터베이스 연결 설정을 가져옵니다.

// ex. url에 Card 라 되어 있으면 Card 관련된 컴포넌트들을 불러옴.
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    
    const [componentAll, componentFilter] = [
        `
            SELECT * 
            FROM Components
        `,
        `
            SELECT * 
            FROM Components
            WHERE category=${name}
        `
    ];
    
    try {
        const [rows] = await connection.query(
            name?.toLocaleLowerCase() === `"all"`
                ? componentAll
                : componentFilter
        );

        return NextResponse.json(rows); // JSON 응답을 반환합니다.
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}