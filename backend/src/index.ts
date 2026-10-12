import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
}); 