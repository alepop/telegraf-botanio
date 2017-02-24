const Telegraf = require('telegraf')
const TelegrafBotanio = require('../lib/botanio')

const bot = new Telegraf(process.env.BOT_TOKEN)
const botanio = new TelegrafBotanio(process.env.BOTANIO_TOKEN)

bot.use(botanio.middleware())

bot.command('start', (ctx) => {
  ctx.botanio.track('start')
  return ctx.reply('Hi there!')
})

bot.startPolling()
