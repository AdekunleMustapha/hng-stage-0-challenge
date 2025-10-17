import express from "express";
import errorHandler from "./middleware/error-handler";
import mainRoute from "./api/me-route"; 
import { PORT } from "./config/env-config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /me endpoint
app.use(mainRoute);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});