const express = require("express");
const app = express();

require("./database");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const ActionRouter = require("./service");
app.use("/api", ActionRouter);

app.get("/", (req, res) => {
  res.send("lets go");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SERVER `);
});
