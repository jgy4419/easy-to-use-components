import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'; // NextRequest를 불러옵니다.
import connection from '@/../lib/db';

export async function DELETE(req: NextRequest) { // req의 타입을 NextRequest로 변경
    const { searchParams } = new URL(req.url); // req.url을 사용하여 URL 객체를 생성
    const deleteIndex = searchParams.get("postNumber");

    try {
        const [rows] = await connection.query(
            `
                DELETE FROM Community
                WHERE idx = ${deleteIndex}
            `
        );

        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({error: "Failed to delete data"}, {status: 500});
    }
}
