require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/main");

app.use(express.json());

app.use("/api/v1/", routes);

const port = 3000 || process.env.PORT;
app.listen(port, console.log(`Server started on port ${port}`));
