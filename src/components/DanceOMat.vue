<template lang="pug">
  svg(:width="svgSize.width", :height="svgSize.height")
    g
      circle(:cx="circlePos.x", :cy="circlePos.y", r="20")
</template>

<script>
export default {
  data () {
    return {
      radius: 200
    }
  },
  computed: {
    currentTime () {
      return this.$store.state.time
    },
    svgSize () {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    center () {
      return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    },
    circlePos () {
      const _this = this
      return {
        x: _this.center.x + _this.radius * Math.cos(_this.currentTime * 0.0005),
        y: _this.center.y + _this.radius * Math.sin(_this.currentTime * 0.0005)
      }
    }
  }
}
</script>

<style scoped>
circle {
  fill: #999;
  stroke: #333;
}
</style>
