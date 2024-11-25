import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import TgService from "./services/tg.service";

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get('', (req: Request, res: Response) => {
    res.send("Express Typescript Server")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

const bot = new TgService(process.env.TGBOT_TOKEN!) 
bot.start()