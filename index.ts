import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from "./routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server testß');
});

app.use('/api/', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ßhttp://localhost:${port}`);
});
