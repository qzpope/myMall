<template>
  <div>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in slide" :key="index" class="swiper-slide">
            Slide{{item}}
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination">

        </div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption:{
        direction:'vertical',
        pagination:{
             el: '.swiper-pagination'
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper-slide{
    width:100%;
    height:4rem;
    text-align: center;
    line-height: 4rem;
    color:red;

}




</style>