import express from "express";
import { Client } from "pg";

const app = express();
const port = process.env.PORT || 3000;

// DB接続
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Render PostgreSQL はこれ必須
  },
});

client
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err: any) => console.error("Database connection error:", err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
