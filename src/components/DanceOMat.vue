<template lang="pug">
  svg(width="800", height="800", :viewBox="viewBox", preserveAspectRatio="xMidYMid meet")
    g
      circle(:cx="circlePos.x", :cy="circlePos.y", :r="circleRadius", @click="test", :fill="circleFill")
</template>

<script>
export default {
  data () {
    return {
      scale: 500,
      radius: 0.5,
      circleRadius: 50,
      damping: 0.0005,
      circleFill: 'rgb(120,120,120)'
    }
  },
  computed: {
    viewBox () {
      return `${this.scale * -1} ${this.scale * -1} ${this.scale * 2} ${this.scale * 2}`
    },
    time () {
      return this.$store.state.time
    },
    circlePos () {
      return {
        x: this.radius * Math.cos(this.time * this.damping) * this.scale,
        y: this.radius * Math.sin(this.time * this.damping) * this.scale
      }
    }
  },
  methods: {
    test () {
      this.circleFill = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`
    }
  }
}
</script>

<style scoped>
circle {
}
circle:hover {
  cursor: pointer;
}
#info {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
