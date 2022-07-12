const express = require('express');
const DrivesRoute = express.Router();

routes=(app)=>{
    app.get('/api',(req, res)=>{
        res.send("Hello World");
    });
    app.use('/api/drivers',DrivesRoute);
}

module.exports = routes;