import { RowDataPacket } from 'mysql2';
import connection from "@/../lib/db";

interface MaxIdxRow extends RowDataPacket {
    max_idx: number | null;
}

export const maxIndex = async (): Promise<MaxIdxRow> => {
    const [rows] = await connection.query<MaxIdxRow[]>(
        'SELECT MAX(idx) AS max_idx FROM Community;'
    );
    
    // 첫 번째 row를 반환합니다.
    return rows[0];
}
