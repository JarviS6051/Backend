import express from "express";

const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if not provided

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
