const debug = require('debug')('telegraf:botanio')
const botan = require('botanio')

class TelegrafBotanio {
  constructor (botanioToken) {
    this.token = botanioToken
    this.client = botan(this.token)
  }
  middleware () {
    return (ctx, next) => {
      ctx.botanio = new BotanioContext(this.client, ctx)
      return next()
    }
  }
}

class BotanioContext {
  constructor (client, ctx) {
    this.client = client
    this.ctx = ctx
  }

  track (eventName) {
    debug('🤖 track', eventName)
    if (this.ctx.from) {
      this.client.track(this.ctx, eventName)
    }
  }
}

module.exports = TelegrafBotanio
