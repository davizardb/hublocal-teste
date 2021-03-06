const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));

app.use("/", require("./routes/empresas"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
    console.log(`Server is running`);
})