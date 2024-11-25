import tgService from "../services/tg.service"
import dotenv from 'dotenv';

class TgModel {
    async start() {
        const startResult = new tgService(process.env.TGBOT_TOKEN!).start()
    }
}

export default new TgModel()