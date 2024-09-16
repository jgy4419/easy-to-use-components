import connection from "@/../lib/db";
import { NextResponse } from "next/server";
import { nowDate } from "@/app/util/nowDate";
import { maxIndex } from "@/app/util/maxPostIndex";

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { title, name, content, password, category, component } = body;

        // 쿼리 함수 호출
        const [maxIdxRows] = await maxIndex();
        const [nowDateRows] = await nowDate();

        // maxIdxRows와 nowDateRows의 첫 번째 요소에서 데이터 추출
        const max_idx = maxIdxRows.length > 0 ? (maxIdxRows[0].max_idx ?? 0) : 0; // max_idx가 없을 경우 0으로 초기화
        const current_datetime = nowDateRows.length > 0 ? nowDateRows[0].current_datetime : null;

        console.log("Max index:", max_idx, "Current datetime:", current_datetime);

        // 서버에 전송될 데이터 로깅
        console.log("서버에 전송될 데이터:", title, name, content, password, category, component);

        // 쿼리 및 값 설정
        const query = 'INSERT INTO Community (idx, title, name, content, password, category, component, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
        const values = [max_idx + 1, title, name, content, password, category, component, current_datetime];

        const [result] = await connection.execute(query, values);
        console.log("Data inserted successfully:", result);

        return NextResponse.json({ message: "Data inserted successfully", result });
    } catch (error) {
        console.error("Error inserting data:", error);
        return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
    }
}