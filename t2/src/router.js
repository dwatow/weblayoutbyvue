import Vue from 'vue'
import VueRouter from 'vue-router'
import news from "./news.vue"
import sale from "./sale.vue"
import footerarea from "./footer.vue"

Vue.use(VueRouter)


const img1 = { template: '<img src="./src/assets/left.png" />' }
const img2 = { template: '<img src="./src/assets/middle.png" />' }
const img3 = { template: '<img src="./src/assets/right.png" />' }


const routes = [
  // { path: '', component: [news, sale, footerarea]}
  { path: '/news', component: news},
  { path: '/sale', component: sale,
    children: [
      { path: '1', component: img1 },
      { path: '2', component: img2 },
      { path: '3', component: img3 },
    ]
  },
  { path: '/footerarea', component: footerarea }
]

export const router = new VueRouter({
  routes
})
