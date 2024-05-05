import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get("/", (req, res) => res.send("Hello World"));

export default app;