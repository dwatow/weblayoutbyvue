<template>
<div id="app">
  <navigation @selectPage="tabSwitch"></navigation>
  <router-view></router-view>
  <!-- <news v-if="selectedNews"></news>
  <sale v-if="selectedSale"></sale>
  <footerarea v-if="selectedFooter"></footerarea> -->
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
    selectedNull: function () {
      return this.tab === ''
    },
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
