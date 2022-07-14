const express = require('express');
const ComicRouter = express.Router();
const ComicAPI= require('../api/comic')
ComicRouter.get('/',ComicAPI.getManyComic)
// getManyComic
routes = (app)=>{
    app.get('/api',(req, res)=>{
        res.send("Hello World");
    });
    app.use('/api/comic',ComicRouter);
}

module.exports = routes;