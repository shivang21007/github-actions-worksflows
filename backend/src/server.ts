import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// For environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));

const users = [
    {
        "name": "User1",
        "age": 20,
        "email": "user1@gmail.com"
    },
    {
        "name": "User2",
        "age": 21,
        "email": "user2@gmail.com"
    },
    {
        "name": "User3",
        "age": 22,
        "email": "user3@gmail.com"
    },
    {
        "name": "User4",
        "age": 23,
        "email": "user4@gmail.com"
    }
];

app.get(['/', '/api'], (req: Request, res: Response) => {
  res.json({ status: "ok", health: "good" });
});

app.get(['/health', '/api/health'], (req: Request, res: Response) => {
  res.json({ status: "ok", health: "good" });
});

app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
