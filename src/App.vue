<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>