<template>
<div id="app">
  <navigation @selectPagÇe="tabSwitch"></navigation>
  <router-view></router-view>
  <router-view name='a'></router-view>
  <router-view name='b'></router-view>
</div>
</template>

<script>
import navigation from "./components/nav.vue"
import news from "./components/news.vue"
import sale from "./components/sale.vue"
import footerarea from "./components/footer.vue"

export default {
  name: 'app',
  components: {navigation, news, sale, footerarea},
  data() {
    return {
      tab: ''
    }
  },
  computed: {
    selectedNews: function () {
      return this.tab === 'Shop' || this.tab === ''
    },
    selectedSale: function () {
      return this.tab === 'Sale' || this.tab === ''
    },
    selectedFooter: function () {
      return this.tab === 'Customer Care' || this.tab === ''
    }
  },
  methods: {
    tabSwitch: function (targetPage) {
      console.log(targetPage)
      if (targetPage === 'Home') {
        this.tab = ''
      }
      else {
        this.tab = targetPage
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
