require("dotenv").config()

const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
