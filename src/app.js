import express from "express";
import cors from "cors";

import useRouter from "./routes/transaction.routes.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get("/", (req, res) => res.send("Hello World"));

app.use("/api/v1/transactions", useRouter);

export default app;