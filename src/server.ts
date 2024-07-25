import dotenv from "dotenv";
dotenv.config();
import serverless from "serverless-http";
import express from "express";
import userRoutes from "./routes/userRoutes";
import connectToDB from "./database/mysql/db";
const app = express();

connectToDB();
app.use(express.json());
app.use(userRoutes);
app.listen(3000);

export const handler = serverless(app);
