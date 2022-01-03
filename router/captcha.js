const router = require('koa-router')();
var svgCaptcha = require('svg-captcha');

// 图形验证
/**
 * @param size          验证码长度
 * @param ignoreChars   验证码字符中排除'0o1i'
 * @param noise         干扰线条数目
 * @param color         验证码字符是否有颜色，默认是没有，但是如果设置了背景颜色，那么默认就是有字符颜色
 * @param background    背景色
 * @param width         宽度
 * @param height        高度
 * @param fontSize      验证码字号
 */
router.post('/captcha', async (ctx) => {
  const options = ctx.request.body
  const code = svgCaptcha.create(options);
  ctx.type = 'image/svg+xml'
  ctx.body = {
    status: 'C0000',
    message: '请求成功',
    result: code
  }
})

module.exports = router