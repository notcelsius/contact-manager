const express = require("express")
const errorHandler = require("./middleware/errorhandler")
const dotenv = require("dotenv").config()
const app = express()

const port = process.env.PORT || 5000

app.use(express.json()) // parses data stream that we receive from client on the server side
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})