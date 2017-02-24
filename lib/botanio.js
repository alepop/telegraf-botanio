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
    if (!this.ctx.from) {
      throw new Error("Can't find sender info")
    }
    debug('🤖 track', eventName)
    this.client.track(
      BotanioContext.getPayload(this.ctx),
      eventName
    )
  }

  static getPayload (ctx) {
    return ctx.callbackQuery ? ctx.callbackQuery : ctx.message
  }
}

module.exports = TelegrafBotanio
