import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve(__dirname, '../../.env')});

export const PORT = Number(process.env.PORT) || 3000;
export const BASE_URL = process.env.BASE_CAT_FACT_API_URL;
export const MAX_LENGTH = process.env.MAX_LENGTH || 1000;