import { Request, Response, NextFunction } from "express";
import axios from "axios";

const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if(axios.isAxiosError(err)) {
        // Handle Axios errors
        if(err.code === 'ECONNABORTED'){
            return res.status(504).json({
                status: "error",
                message: "The request took too long - please try again later.",
            });
        }else if(err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED'){
            return res.status(502).json({
                status: "error",
                message: "Unable to reach the Cat Fact API - please try again later.",
            });
        }else if(axios.isAxiosError<{message: string, code: number}>(err)){
            return res.status(err.response?.data.code || 400).json({
                status: "error",
                message: err.response?.data.message || "An error occurred while fetching data from the Cat Fact API.",
            })
        }else{
            return res.status(500).json({
                status: "error",
                message: "An unexpected error occurred while fetching data from the Cat Fact API.",
            });
        }
    // fallback for other error types 
    }else{
        return res.status(500).json({
            status: "error",
            message: "An unexpected error occurred while fetching data from the Cat Fact API.",
        });
    }
}

export default errorHandler;