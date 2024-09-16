import { RowDataPacket, FieldPacket } from 'mysql2';
import connection from "@/../lib/db";

interface MaxIdxRow extends RowDataPacket {
    max_idx: number | null;
}

export const maxIndex = async (): Promise<any> => {
    const index =  connection.query('SELECT MAX(idx) AS max_idx FROM Community;');
    return index;
}