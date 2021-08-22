import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";
import { AppError } from "./shared/errors/AppError";

const app = express();

app.use(express.json());
app.use(router);

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                message: err.message
            })
        }

        return res.status(500).json({
            status: "error",
            message: `Internal Server Error - ${err.message}`
        })
    }
)

app.listen("8080", () => {
    console.log("Serve Running");
})

