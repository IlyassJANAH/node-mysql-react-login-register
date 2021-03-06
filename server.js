const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

let Users = require('./routes/Users')

app.use('/api/users', Users)

app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})
