# Botanio middleware for Telegraf
[Botanio](http://botan.io) middleware for [Telegraf (Telegram bot framework)](https://github.com/telegraf/telegraf)
## Installation
```js
$ npm install telegraf-botanio
```
## Example
```js
const Telegraf = require('telegraf')
const TelegrafBotanio = require('telegraf-botanio')

const bot = new Telegraf(process.env.BOT_TOKEN)
const botanio = new TelegrafBotanio(process.env.BOTANIO_TOKEN)

bot.use(botanio.middleware())

bot.command('start', (ctx) => {
  ctx.botanio.track('start')
  return ctx.reply('Hi there!')
})

bot.startPolling()
```
