require("dotenv").config()

const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 8000

const app = express()
app.use(cors())

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
