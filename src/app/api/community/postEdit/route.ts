import connection from "@/../lib/db";
import { NextResponse } from "next/server";
import { nowDate } from "@/app/util/nowDate";

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { title, name, content, password, category, component, updateIndex } = body;
        const nowDateRows = await nowDate();

        const [rows] = await connection.query(`
            UPDATE Community 
            SET title='${title}', name='${name}', password='${password}', content='${content}', category='${category}', component='${component}', date='${nowDateRows}' 
            WHERE idx=${updateIndex}`
        );

        return NextResponse.json(rows);
    } catch (error) {
        console.error("Error inserting data:", error);
        return NextResponse.json({ error: "데이터 업데이트 실패" }, { status: 500 });
    }
}
