<template>
    <div id="headbox">
      <div class="side_space clearfix">
        <div id="logo">
          <img src="../assets/logo.png" alt="zero type logo" />
          <div class="text">ZERO TYPE</div>
        </div>
        <ul id="menu" class="initial">
          <li class="selected_page" @click="toFormsPage">Home</li>
          <li>Features</li>
          <li>News</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toFormsPage: function () {
      this.$emit('toForms')
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}

.side_space {
  margin: 0 auto;
  width: 910px;
}

.debug_css {
  border: 1px solid;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

#headbox {
  font-family: sans-serif;
  background-color: #EEEEEE;
}

#logo {
  display: block;
  float: left;
  width: 85px;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
}

#logo .text {
  text-align: center;
  font-size: 15px;
}

.selected_page {
  color: #f99603;
}

#logo img {
  display: block;
  height: 80px;
  width: 52;
  margin: 0 auto;
}

#menu.initial {
  padding-left: 0px;
  margin-bottom: 0px;
}

#headbox ul li {
  float: left;
  display: block;
  font-size: 15px;
  line-height: 160px;
  margin-left: 82px;
}

#headbox ul li + li {
  margin-left: 110px;
}

</style>
