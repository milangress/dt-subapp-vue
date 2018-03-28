<template lang="pug">
  svg(:width="svgSize.width", :height="svgSize.height")
    g
      circle(:cx="circlePos.x", :cy="circlePos.y", r="20")
</template>

<script>
import Vector2D from '../lib/vector-2d'
export default {
  data () {
    return {
      center: new Vector2D(),
      radius: 100,
      damping: 0.001
    }
  },
  computed: {
    svgSize () {
      // FIXME: this innerWidth / innerHeight stuff is probably bullshit (also check Vector2D class!)
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    circlePos () {
      const _this = this
      return {
        x: _this.center.windowX + _this.radius *
          Math.cos(_this.$store.state.time * _this.damping),
        y: _this.center.windowY + _this.radius *
          Math.sin(_this.$store.state.time * _this.damping)
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
