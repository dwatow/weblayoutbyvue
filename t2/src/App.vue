<template>
<div id="app">
  <navigation @selectPage="tabSwitch"></navigation>
  <news v-if="selectedNews"></news>
  <sale v-if="selectedSale"></sale>
  <footerarea v-if="selectedFooter"></footerarea>
</div>
</template>

<script>
import navigation from "./nav.vue"
import news from "./news.vue"
import sale from "./sale.vue"
import footerarea from "./footer.vue"

export default {
  name: 'app',
  components: {navigation, news, sale, footerarea},
  data() {
    return {
      tab: ''
    }
  },
  computed: {
    selectedNews: function (){
      return this.tab === 'Home'
    },
    selectedSale: function () {
      return this.tab === 'Shop'
    },
    selectedFooter: function () {
      return this.tab === 'Sale'
    }
  },
  methods: {
    tabSwitch: function (targetPage) {
      console.log(targetPage);
      this.tab = targetPage
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
