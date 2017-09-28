<template>
  <div class="footer">
    <ul class="horizontal_list_initial">
      <li class="footer_stay_connected">
        <p>STAY CONNECTED</p>
        <ul class="horizontal_list_initial">
          <li>
            <!-- <i class="fa fa-facebook"></i> -->
          </li>
          <li>
            <!-- <i class="fa fa-twitter"></i> -->
          </li>
          <li>
            <!-- <i class="fa fa-pinterest-p"></i> -->
          </li>
          <li>
            <!-- <i class="fa fa-instagram" aria-hidden="true"></i> -->
          </li>
        </ul>
      </li>
      <li class="footer_be_our_friend">
        <p>BE OUR FRIEND</p>
        <input class="update_me_text" type="text" placeholder="Email" />
        <input class="update_me_button" type="button" value="Update Me" />
      </li>
      <li class="need_assistance">
        <p class="text_center">NEED ASSISTANCE</p>
        <p class="text_center">123-456-7890</p>
        <p class="text_center">info@mysite.com</p>
      </li>
    </ul>
    <div class="text_center copy_right">
      (c)2023 by PRETTY GAL. Proudly created with Wix.com
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>
.footer {
    background-color: #535151;
    color: #d2d2d2;
    min-height: 303px;
}

.text_center {
    text-align: center;
}

.footer>ul {
    text-align: center;
}

.footer>ul>li {
    margin-top: 56px;
    margin-left: 60px;
    margin-right: 60px;
    font-size: 11pt;
    vertical-align: top;
}

.footer p {
    margin-top: 0px;
    margin-bottom: 10px;
}

.horizontal_list_initial ul li {
    margin: 0 10px;
}
.horizontal_list_initial i {
    font-size: 18px;
}


.footer_be_our_friend>p {
    text-align: left;
}

.footer_be_our_friend {
    text-align: right;
}

.footer_be_our_friend>input {
    display: block;
}

.update_me_text{
    background-color: transparent;
    font-size: 14px;
    border: 1px white solid;
    color: white;
    padding: 6px;
    width: 282px;
}

.update_me_button {
    margin-top: 7px;
    padding: 6px 11px;
    float: right;
    border: none;
    background-color: #d3d3d3;
}

.need_assistance {
    font-weight: bold;
}

.need_assistance::first-line {
    font-weight: normal;
}

.copy_right {
    margin: 0 auto;
    font-size: 9pt;
    letter-spacing: 1.5pt;
    margin-top: 62px;
}
</style>
