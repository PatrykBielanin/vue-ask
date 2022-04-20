const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const VueAsk = require('../dist/vue-ask.cjs')

const app = createSSRApp({
  template: `
    <h1>Vue ask render</h1>
    <VueAsk>
        <p>Test</p>
    </VueAsk>
  `
})

app.use(VueAsk);

;(async () => {
  const html = await renderToString(app)
  console.log(html)
})()
