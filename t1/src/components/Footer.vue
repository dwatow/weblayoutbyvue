<template>
<div id="footer">
  <div class="side_space clearfix">
    <ul id="footer_link_list">
      <li>
        <!-- <i class="fa fa-facebook-square sociality_icon_size"></i> -->
      </li>
      <li>
        <!-- <i class="fa fa-google-plus-square sociality_icon_size"></i> -->
      </li>
      <li>
        <!-- <i class="fa fa-twitter-square sociality_icon_size"></i> -->
      </li>
      <li>
        <!-- <i class="fa fa-pinterest-square sociality_icon_size"></i> -->
      </li>
    </ul>
    <p id="footer_copy_right_text">(c) 2023 Zerotype. All Rights Reserved.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
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
