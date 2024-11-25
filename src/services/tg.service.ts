import { Bot, Context } from 'grammy'
 
class TgService {
    private bot: Bot<Context>;
    
    constructor(token: string) {
        this.bot = new Bot(token)
        this.registerHandlers()
    }

    private registerHandlers() {
        this.bot.command('start', (ctx) => {
            ctx.reply('Welcome !')
        })
    }

    public start() {
        this.bot.start()
    }
}

export default TgService