const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')

const app = new Koa()
const router = new Router()

let urls = fs.readdirSync(__dirname + '/router')
urls.forEach(item => {
  let module = require(__dirname + '/router/' + item)
  router.use('/' + item.replace('.js', ''), module.routes(), module.allowedMethods())
})
app.use(router.routes())

const os = require('os')
      iptable = {}
      ifaces = os.networkInterfaces()
for (const i in ifaces) {
  ifaces[i].forEach((item, index) => {
    if (item.family=='IPv4') {
      iptable[i] = item.address
    }
  })
}
console.log(iptable.以太网);
app.listen(3000, () => {
  console.log('run 3000');
})
