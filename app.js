const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

const index = require('./router/index')
const captcha = require('./router/captcha')

app.use(index.routes(), index.allowedMethods()); // 首页
app.use(captcha.routes(), captcha.allowedMethods()); // 图形验证码

app.listen(3030, () => {
  console.log('api-cjn server is starting at port 3030')
})