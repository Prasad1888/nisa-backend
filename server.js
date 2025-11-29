import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
    process.env.FRONTEND_URL
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: false,
}));

app.use(express.json());

// Routes
app.use("/api", formRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({
        Responding_With_The_Message: "Server is up & running successfully..."
    })
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});