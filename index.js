const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const app = new Koa()
const router = new Router()
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type")
  ctx.set("Access-Control-Allow-Credentials", true)
  ctx.set("Access-Control-Max-Age", 300)
  await next()
})

router.get('/', async (ctx, next) => {
  ctx.type = 'text/html'
  ctx.body = fs.createReadStream('./dist/index.html')
  app.use(require('koa-static')(path.join(__dirname, '/dist')))
})

let urls = fs.readdirSync(__dirname + '/router')
urls.forEach(item => {
  let module = require(__dirname + '/router/' + item)
  router.use('/' + item.replace('.js', ''), module.routes(), module.allowedMethods())
})
app.use(router.routes())

// socket
let userNameList = new Map()
io.on('connection', socket => {
  // 登录
  socket.on('login', data => {
    userNameList.set(socket.id, data)
    socket.emit('login', { code: 0 })
    socket.broadcast.emit('num', userNameList.size)
  })
  // 获取人数
  socket.on('getLoginInfo', data => {
    socket.emit('id', socket.id)
    socket.emit('num', userNameList.size)
  })
  // 接收信息
  socket.on('send', data => {
    socket.emit('message', { user: userNameList.get(socket.id), content: data })
    socket.broadcast.emit('message', { user: userNameList.get(socket.id), content: data })
  })
  // 断线
  socket.on('disconnect', res => {
    userNameList.delete(socket.id)
    socket.broadcast.emit('num', userNameList.size)
  })
})

server.listen(80, () => {
  console.log('run 80');
})
