import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./db";
import { auth } from "./routers/user";

dotenv.config();
const PORT = process.env.PORT || 8000;

const start = () => {
    connectDatabase();
    const app = express();
    const PORT = 8000;
    app.use(express.json());
    app.use(cors());
    app.use("/", auth)

    app.get("/", (req, res) => {
        res.status(200).send({ success: true, msg: "Working" });
    });

    app.listen(PORT, () => {
        console.log("Server is running");
    });
};
start();