<template>
  <div>
    <div class="main-div">
      <keep-alive>
        <router-view/>
      </keep-alive>   
    </div>
    <van-tabbar class="tab-bar" v-model="active" @change="changeTabbar(active)" >
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="records">列表页</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20">会员中心</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      nowPath: ""
    };
  },
  created() {
    this.changeTabBarActive();
  },
  updated() {
    this.changeTabBarActive();
  },
  methods: {
    changeTabbar(active) {
      console.log(active);
      switch (active) {
        case 0:
          this.$router.push({ name: "ShoppingMall" });
          break;
        case 1:
          this.$router.push({ name: "CategoryList" });
          break;
        case 2:
          this.$router.push({ name: "Cart" });
          break;
        case 3:
          break;
      }
    },
    changeTabBarActive() {
      this.nowPath = this.$route.path;
      if (this.nowPath == "/cart") {
        this.active = 2;
      }
    }
  }
};
</script>

<style scoped>
/* .tab-bar{
  width:100%;
  height:4rem;
  position: absolute;
  background:#000;
  left:0;
  top:0;
  right:0;
  z-index:9999;

} */
</style>