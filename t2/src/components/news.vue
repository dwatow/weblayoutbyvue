<template>
  <div id="news">
    <div id="news_background">
      <div id="news_content">
        <p>FALL & WINTER</p>
        <button>Shop Now</button>
      </div>
    </div>
    <div id="news_free_shipping_worlwide">
      <p>FREE SHIPPING WORLWIDE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style>
#news_background {
    background-image: url(../assets/cover.jpg);
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;

    height: 600px;
    padding-top: 5px;
}

#news_content {
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    margin-top: 250px;
    max-width: 545px;
    height: 172px;

    text-align: center
}

#news_content>p{
    font-family: serif;
    font-size: 50px;
    padding: 30px 0 18px 0;
    margin: 0 auto;
    text-align: inherit;
    letter-spacing: 2px;
}

#news_content>button {
    width: 220px;
    height: 40px;
    font-size: 18px;
    color: white;
    background-color: black;
    border-style: none;
    text-align: inherit;
}

#news_free_shipping_worlwide {
    background-color: #e3e3e3;
    line-height: 45px;
    letter-spacing: 3pt;
}

#news_free_shipping_worlwide p{
    margin: 0 auto;
    text-align: center;
}

</style>
