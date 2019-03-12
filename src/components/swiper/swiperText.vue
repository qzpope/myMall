<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="text">
        <div class="centent">
          北京时间2月25日，火箭主帅德安东尼在采访中透露了重要信息。他表态，会在之后的比赛中考虑让法里德和卡佩拉这对“兽皇”组合继续担任首发，他认为火箭在此前的比赛中受困于身高，在篮板球上吃了大亏。如今法里德融入的很好，会考虑新的首发阵容。
          德帅表示，埃里克-戈登对于重回第六人保持开放态度。如此，火箭极有可能在哈登归来之后，组成保罗、哈登、塔克、法里德和卡佩拉的首发阵容，法里德进入首发，担纲四号位，塔克回到三号位，戈登回到替补席。如今对阵勇士比赛中试验的阵容，取得了巨大的成功，法里德成为了火箭在锋线上重要的选择，德安东尼也有意摒弃此前小阵容的打法，重新回到常规身高的阵容。
          如此火箭，在防守端必然会取得大幅度的提升。如今最大的悬念就在于，法里德能否一直保持高效的外线投射，能否一直起到拉开空间的作用了
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
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
.swiper {
  height: 300px;
  overflow: hidden;
}
.text {
  font-size: 18px !important;
  text-align: left;
  padding: 30px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>