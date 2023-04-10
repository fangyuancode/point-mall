<template>
  <div class="app">
    <topbar></topbar>
    <!-- <header-bar></header-bar> -->
    <headerBar></headerBar>
    <router-view></router-view>
    <footerbar></footerbar>
    <loginbar v-show="isShowLoginModal"></loginbar>
  </div>
</template>
<script>
import topbar from '@/components/topbar.vue';
import headerBar from '@/components/headerBar.vue';
import footerbar from "@/components/footerbar.vue";
import loginbar from './components/loginbar.vue';
import { mapState } from 'vuex';
export default {
  components: { topbar, headerBar, footerbar, loginbar },
  data() {
    return {

    }
  },
  computed: {
...mapState({
  isShowLoginModal:state=>state.isShowLoginModal
})
  }
}
</script>
<style lang="less" scoped></style>