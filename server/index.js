const server = require('express')
const app = server()
const TodoRouter = require('./routes/todoRoute')
const cors = require('cors');
const port = 5000

app.use(cors())

app.use(server.json())
app.use(server.urlencoded())

app.use("/todo",TodoRouter)


app.listen(port, function(){ console.log("listen to port " + port)})