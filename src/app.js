const express= require('express');
const app= express();
require("./db/conn.js");
const Student= require('./models/students.js');


app.use(express.json());
const port= process.env.port || 3000;



app.post("/students", (req, res) => {
      console.log(req.body);
     const user = new Student(req.body);

     user.save().then(() => {
         res.status(201).send(user);
     }).catch((e) => {
         res.status(400).send(e);
        })


    // res.send("hello bro");
})

app.listen(port, () => {
    console.log(`connection is established at ${port}`);
})