import { NextResponse } from 'next/server';
import connection from '@/../lib/db';

export async function DELETE(req: { url: string | URL }) {
    const { searchParams } = new URL(req.url);
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
        return NextResponse.json({error: "Failed to fetch data"}, {status: 500});
    }
}