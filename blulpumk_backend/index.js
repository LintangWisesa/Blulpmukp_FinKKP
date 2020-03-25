var express = require('express')
var cors = require('cors')

var app = express()
app.use(cors())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/templates/index.html')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})