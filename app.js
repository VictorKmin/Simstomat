const express = require('express');
const app = express();
const port = process.env.POST || 3001;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());
app.use(express.urlencoded({extends: true}));

const postgres = require('./dataBase').getInstance();
postgres.setModels();

const commentRouter = require('./routes/comment');

app.use('/comment', commentRouter);


app.listen(port, err => {
    if (err) console.log(err);
    else console.log(`Listen on port ${port}`);
});
