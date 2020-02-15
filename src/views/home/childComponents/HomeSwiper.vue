<template>
  <div>
    <swiper>
      <swiper-item>
        <img src='~assets/img/swiper/s1.jpg' alt=""   />
      </swiper-item>
      <swiper-item>
        <img src='~assets/img/swiper/s2.jpg' alt=""   />
      </swiper-item>
      <swiper-item>
        <img src='~assets/img/swiper/s3.jpg' alt=""   />
      </swiper-item>
      <swiper-item>
        <img src='~assets/img/swiper/s4.jpg' alt=""   />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
