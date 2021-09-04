const { request } = require('express');
const express = require('express');
const app = express();
const port = 8080;

app.get("/student/studentList", (request, response) => {
    response.send({ "results": ["Rajesh", "Ramesh", "Sayali", "Sanjana"] });
});

app.listen(process.env.PORT || port, () => {
    console.log("Server has been listening on port" + port);
});