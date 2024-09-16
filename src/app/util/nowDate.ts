import { RowDataPacket, FieldPacket } from 'mysql2';
import connection from "@/../lib/db";

interface NowDateRow extends RowDataPacket {
    current_datetime: string;
}

export const nowDate = async (): Promise<any> => {

    const [nowDateRows]: any = await connection.query('SELECT NOW() AS current_datetime;');
    const current_datetime = nowDateRows.length > 0 ? nowDateRows[0].current_datetime : null;
    
    const year = current_datetime.getFullYear(),
        month = String(current_datetime.getMonth() + 1).padStart(2, '0'),
        day = String(current_datetime.getDate()).padStart(2, '0'),
        hours = String(current_datetime.getHours()).padStart(2, '0'),
        minutes = String(current_datetime.getMinutes()).padStart(2, '0'),
        seconds = String(current_datetime.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}