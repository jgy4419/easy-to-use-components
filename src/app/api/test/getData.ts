// pages/api/getData.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connection from "@/../lib/db";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     try {
//         const [rows] = await connection.query('SELECT * FROM Components');
//         res.json(rows);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// }

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const [rows] = await connection.query('SELECT * FROM Components');
        res.json(rows);

        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {
                "Coontent-Type": 'application/json'
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}