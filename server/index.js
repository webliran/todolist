const server = require('express')
const app = server()
const TodoRouter = require('./routes/todoRoute')
const cors = require('cors');
const mongoose = require('mongoose')
const port = 5000

mongoose.connect('mongodb://localhost:27017/todoAppDb', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(cors())

app.use(server.json())
app.use(server.urlencoded())

app.use("/todo",TodoRouter)


app.listen(port, function(){ console.log("listen to port " + port)})