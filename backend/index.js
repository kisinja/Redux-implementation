const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.post("/api/users/:id/update", (req, res) => {
    setTimeout(() => {
        res.send(req.body);
        console.log(req.body);
    }, [2000]);
});

app.listen(8800, () => {
    console.log("Backend server is running!");
});