const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "J141900j.",
    database: "EasyComponents"
});

// http://localhost:3001/api/data 경로로 MYSQL DB에서 데이터를 가져오는 API를 제공한다.

app.get("/api/data", async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM Components');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
})

// import express, { Request, Response } from 'express';
// import next from 'next';
// import sequelize from './db';
//
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare().then(() => {
//     const server = express();
//
//     // DB 연결 테스트
//     sequelize.authenticate()
//         .then(() => console.log('Database connected...'))
//         .catch(err => console.error('Error: ' + err));
//
//     // Custom API routes
//     // server.get('api/hello', (req: Request, res: Response) => {
//     //     res.json({ message: ' Hello from Express with TypeScript!!' })
//     // });
//     server.get('/api/users', async (req: Request, res: Response)=> {
//         try {
//             const [results, metadata] = await sequelize.query('SELECT * FROM Users');
//             res.json(results);
//         } catch(err) {
//             res.status(500).json({ error: "Database error "});
//         }
//     })
//
//     // Next.js 요청 처리
//     server.all('*', (req: Request, res: Response) => {
//         return handle(req, res);
//     });
//
//     server.listen(4000, (err?: any) => {
//         if(err) throw err;
//         console.log("> Ready on http://localhost:4000");
//     });
// })