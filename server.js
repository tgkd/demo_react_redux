const express = require("express");

const app = express();
const path = require("path");

const data = require("./data/test_data");

app.use(express.static(path.join(__dirname, "dist")));

app.get("/list", (req, res) => {
    const listData = data.map(d => ({ id: d.id, name: d.name }));
    setTimeout(() => {
        res.send(listData);
    }, 2000);
});

app.get("/details", (req, res) => {
    const details = data.find(d => d.id === req.query.id);

    setTimeout(() => {
        res.send(details);
    }, 2000);
});

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
    const port = process.env.PORT || 8080;
    console.info(`http://localhost:${port}`);
});
