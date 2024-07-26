import dotenv from "dotenv";
dotenv.config();
import serverless from "serverless-http";
import express from "express";
import userRoutes from "./routes/userRoutes";
import connectToDB from "./database/mysql/db";
import serverConfig from "./config/server";
const app = express();

//

connectToDB();
app.use(express.json());
app.use(userRoutes);
app.listen(serverConfig.PORT);

export const handler = serverless(app);
