<template>
  <div class="home">
    success
    <line222 :list='[1,5,8,9,41,85]' />
  </div>
</template>

<script>
// @ is an alias to /src
import line222 from '../components/echartsDemo'
export default {
  name: "Home",
  data () {
    return {
      list: []
    }
  },
  components: {
    line222
  }
};
</script>

<style lang="less" scoped>

</style>
