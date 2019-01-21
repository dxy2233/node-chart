const Router = require('koa-router')
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'hello'
})
router.get('/sss', (ctx, next) => {
  ctx.body = 'ssss'
})

module.exports = router
