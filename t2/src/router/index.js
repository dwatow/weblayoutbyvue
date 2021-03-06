import Vue from 'vue'
import VueRouter from 'vue-router'
import news from "../components/news.vue"
import sale from "../components/sale.vue"
import footerarea from "../components/footer.vue"

Vue.use(VueRouter)

const img = {
  computed: {
    url: function () {
      return './src/assets/' + this.$route.params.imgName
    }
  },
  template: '<img :src=url />'
}

const routes = [{
    path: '',
    components: {
      default: news,
      a: sale,
      b: footerarea
    }
  },
  {
    path: '/news',
    component: news
  },
  {
    path: '/sale',
    component: sale,
    children: [{
      path: ':imgName',
      component: img
    }]
  },
  {
    path: '/footerarea',
    component: footerarea
  }
]

export const router = new VueRouter({
  routes
})
