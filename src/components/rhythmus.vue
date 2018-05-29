<template lang="pug">
  svg(width="100vw",height="100vh" @click="() => {makePoint()}")
    g
      template(v-for="(rythmWeight, i) in rythmWeights")
        g(:class="rythm")
        rect(:x="bar.x" :y="0" :width="rythm.width[i]" :height="bar.height" fill="black")
</template>

<script>
  export default {
    data () {
      return {
        rythmWeights: [
          1, 2, 1, 1
        ],
        bar: {
          width: 100,
          height: window.innerHeight,
          x: 100
        }
      }
    },
    computed: {
      rythm: function () {
        let sumOfRythm = this.rythmWeights.reduce(function (acc, val) {
          return acc + val
        })
        let rythmBarWidth = []
        this.rythmWeights.forEach((val, i) => {
          let windowWith = window.innerWidth
          rythmBarWidth[i] = (val / sumOfRythm) * windowWith
        })
        return {width: rythmBarWidth}
      }
    }
  }
</script>

<style scoped>

</style>
