<template>
<div id="app">
  <navigation></navigation>
  <news></news>
  <sale></sale>
  <footerarea></footerarea>
</div>
</template>

<script>
import navigation from "./nav.vue"
import news from "./news.vue"
import sale from "./sale.vue"
import footerarea from "./footer.vue"

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {navigation, news, sale, footerarea}
}
</script>

<style>
body {
  margin: 0;
}
</style>
