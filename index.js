const app =  require('./app')
const port = process.env.PORT ||3000;
const host = 'localhost';


app.listen(port, function()  {
  console.log("Example app listening at http://%s:%s",host, port)
})

