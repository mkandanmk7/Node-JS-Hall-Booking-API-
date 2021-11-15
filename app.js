require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("server is running successfully");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
