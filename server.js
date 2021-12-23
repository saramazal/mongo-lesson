const express = require("express");
const app = express();

app.use(express.json());
const db = require('./DL/models/db')

const router = require('./routers')
app.use(express.static('public'))


db.connect().then(() => {
    router(app)

    app.listen(3000,
        () => console.log('server is up'))
})
    .catch((err) => {
        console.error(err);
    })