import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
}); 