import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://job-portal-frontend.onrender.com",
    "https://job-portal-frontend-*.onrender.com",
    "https://*.onrender.com" // Allow all Render subdomains
  ],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;

 
//api's

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "success",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Root endpoint for testing
app.get("/", (req, res) => {
  res.status(200).json({ 
    status: "success",
    message: "Job Portal API is running",
    endpoints: {
      health: "/api/health",
      user: "/api/user",
      company: "/api/company",
      job: "/api/job",
      application: "/api/application"
    }
  });
});

app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/api/health`);
  
  // Connect to database (non-blocking)
  connectDB().catch((error) => {
    console.error("Database connection failed:", error.message);
    console.log("Server will continue running without database connection");
  });
});
