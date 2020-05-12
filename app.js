const express = require('express')
const app = express()
const port = 2001

const productRoute = require('./src/routes/productRoute')
const storeRoute = require('./src/routes/storeRoute')
const uiRoute = require('./src/routes/uiRoute')

app.use(express.json())
app.use(productRoute)
app.use(storeRoute)
app.use(uiRoute)

app.get('/', (req, res) => {
    res.send({message : 'tersambung'})
})

app.listen(port, () => {console.log(`running at port ${port}`)})
