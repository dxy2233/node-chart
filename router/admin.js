const Router = require('koa-router')
const router = new Router()

router.get('/login', (ctx, next) => {
  ctx.body = 'login'
})

module.exports = router
