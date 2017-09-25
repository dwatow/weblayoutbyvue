<template>
  <div id="app">
      <div id="headbox">
        <div class="side_space clearfix">
          <div id="logo">
            <img src="./assets/logo.png" alt="zero type logo" />
            <div class="text">ZERO TYPE</div>
          </div>
          <ul id="menu" class="initial">
            <li class="selected_page">Home</li>
            <li>Features</li>
            <li>News</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div id="content">
        <div class="clearfix try_it try_it_text_side_space">
          <img src="./assets/box.png" alt="hurry up try it" />
          <div id="try_it_text">
            <h1>IDEAS?</h1>
            <h2>This is just a place holder</h2>
            <p>You can remove any link to owr website from this sebsite template, you're free to use this website template without linking back to us.</p>
            <div>
              <button id="try_it_button">TRY IT NOW!</button>
              <p>Don't worry It's for free</p>
            </div>
          </div>
        </div>
        <div class="content_text_side_space">
          <h1 id="content_head">This is just a place holder.</h1>
          <div id="content_text">
            <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
            <p>This is just a place holder, so you can see what the site would look like.</p>
            <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us. This is just a place holder, so you can see what the site would look like.</p>
            <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
            <p>This is just a place holder, so you can see what the site would look like.</p>
            <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us. This is just a place holder, so you can see what the site would look like.</p>
          </div>
        </div>
      </div>
      <div id="footer">
        <div class="side_space clearfix">
          <ul id="footer_link_list">
            <li>
              <i class="fa fa-facebook-square sociality_icon_size"></i>
            </li>
            <li>
              <i class="fa fa-google-plus-square sociality_icon_size"></i>
            </li>
            <li>
              <i class="fa fa-twitter-square sociality_icon_size"></i>
            </li>
            <li>
              <i class="fa fa-pinterest-square sociality_icon_size"></i>
            </li>
          </ul>
          <p id="footer_copy_right_text">(c) 2023 Zerotype. All Rights Reserved.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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

#headbox ul li + li {
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
    float:right;
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

#try_it_text div p{
    font-size: 12px;
    margin: 5px 0;
}

#try_it_button {
    background-color: #4098D3;
    color: #FFF;
    font-size: 25px;
    background-image:
    linear-gradient(#FFBA53 50%, #F99303 50%);
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

#content_text p{
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

#footer .side_space{
    margin: 0 auto;
    width: 880px;
}

#footer_link_list {
    float: right;
    padding-left: 0;
    margin: 0 auto;
}

#footer_link_list li{
    display:inline;
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
