import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("MY APP");
});

app.get("/dashboard", function (req, res) {
  res.send("dashboard");
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is runing http://localhost:${port}`);
});
