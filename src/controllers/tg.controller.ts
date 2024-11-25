import tgModel from "../models/tg.model"

class TgController {
    async start() {
        const startResult = await tgModel.start()
    }
} 


export default new TgController()