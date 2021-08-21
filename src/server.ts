import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.json({ ok: true });
})

app.listen("8080", () => {
    console.log("Serve Running");
})

