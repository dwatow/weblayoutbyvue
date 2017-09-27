<template>
<div id="app">
  <headbox @toForms="switchForms"></headbox>
  <template v-if="isForm">
    <contentbox></contentbox>
  </template>
  <template v-else>
    <forms></forms>
  </template>
<footerbox></footerbox>
</div>
</template>

<script>
import headbox from './components/Head.vue'
import contentbox from './components/Content.vue'
import footerbox from './components/Footer.vue'
import forms from './components/Forms.vue'

export default {
  name: 'app',
  components: {
    headbox,
    contentbox,
    footerbox,
    forms
  },
  data () {
    return {
      isForm: true
    }
  },
  methods: {
    switchForms: function () {
      // console.log('switch')
      this.isForm = !this.isForm
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
    margin: 0px;
  }

  #headbox ul li {
    float: left;
    display: block;
    font-size: 15px;
    line-height: 160px;
    margin-left: 82px;
  }

  #headbox ul li+li {
    margin-left: 110px;
  }

  #content {
    font-family: sans-serif;
  }

  .try_it_text_side_space {
    margin: 0 auto;
    width: 795px;
  }

  #content .try_it img {
    float: right;
    padding-top: 60px;
    width: 357px;
  }

  #try_it_text {
    width: 365px;
    padding: 7px;
  }

  #try_it_text h1 {
    padding-top: 40px;
    font-size: 50pt;
    line-height: 50pt;
    margin: 0;
  }

  #try_it_text h2 {
    padding-top: 0px;
    font-size: 22pt;
    line-height: 22pt;
    margin: 0;
  }

  #try_it_text p {
    font-size: 16px;
    color: #585858;
  }

  #try_it_text div {
    margin: 0 auto;
    width: 230px;
  }

  #try_it_text div p {
    font-size: 12px;
    margin: 5px 0;
  }

  #try_it_button {
    background-color: #4098D3;
    color: #FFF;
    font-size: 25px;
    background-image: linear-gradient(#FFBA53 50%, #F99303 50%);
    border-radius: 6px;
    border-style: none;
    height: 59px;
    width: inherit;
  }

  #content_try_it_content_button {
    margin: 0 auto;
    width: 300px;
  }


  .content_text_side_space {
    margin: 151px auto;
    width: 820px;
  }

  .content_text_side_space p {
    font-size: 17px;
  }

  #content_head {
    font-size: 28px;
    margin: 28px 0;
  }

  #content_text {
    column-count: 2;
    column-gap: 50px;
  }

  #content_text p {
    display: block;
    color: #585858;
    line-height: 24px;
    margin-bottom: 28px;
    margin-top: 0;
  }

  #footer {
    background-color: #EEEEEE;
    height: 75px;
    border-top: 1px solid #d8d8d8;
  }

  #footer .side_space {
    margin: 0 auto;
    width: 880px;
  }

  #footer_link_list {
    float: right;
    padding-left: 0;
    margin: 0 auto;
  }

  #footer_link_list li {
    display: inline;
    margin: 0px 8px;
  }

  #footer_copy_right_text {
    margin-top: 34px;
    margin-left: 12px;
    width: 380px;
    font-size: 12px;
    color: #585858;
  }

  #footer_link_list li i {
    font-size: 32px;
  }

</style>
