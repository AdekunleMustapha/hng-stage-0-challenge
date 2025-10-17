import { Request, Response, NextFunction, Router } from "express";
import axios from "axios";
import { MAX_LENGTH, BASE_URL } from "../config/env-config";

const mainRoute = Router();

mainRoute.get("/me", async (_req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("/me endpoint it!");
        const response = await axios.get<{fact: string}>(`${BASE_URL}/fact?max_length=${MAX_LENGTH}`,
            {
                timeout: 10000,
            }
        );
        console.log("Fetched cat fact:");
        return res.status(200).json({
            status: "success",
            user: {
                email: "adekunlemustapha26530@gmail.com",
                name: "Adekunle Mustapha",
                stack: "Node.js/Express",
            },
            timestamp: new Date().toISOString(),
            fact: response.data.fact,
        })
    } catch(error) {
        console.log("Error occurred while fetching cat fact:", error);
        return next(error);
    }
});

export default mainRoute;