<template>
  <div id="navigation_background">
      <div id="navigation" class="clear_fix">
          <ul class="menu horizontal_list_initial">
              <li id="logo">PRETTY GAL</li>
              <li class="menu_selected">Home</li>
              <li>Shop</li>
              <li>Sale</li>
              <li>Customer Care</li>
              <li>Stockists</li>
          </ul>
          <img class="view_shopping_cart" src="./assets/bag.png" alt="view_shopping_cart"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'navigation_background'
}
</script>

<style>
.horizontal_list_initial > li {
  display: inline-block;
}

.horizontal_list_initial {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}

#navigation_background {
    background-color: #535151;
    height: 94px;
}

#navigation {
    padding-top: 24px;
    margin: 0 auto;
    width: 918px;
    color: #d2d2d2;
}

.menu {
    float: left;
}

.menu li {
    padding-right: 62px;
    font-size: 16px;
}

#logo {
    font-size: 21px;
    letter-spacing: 5pt;
}

.view_shopping_cart {
    height: 33px;
    float: right;
}

.menu_selected {
    color: #fff;
}
</style>
