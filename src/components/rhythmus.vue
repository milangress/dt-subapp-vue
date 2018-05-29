<template lang="pug">
  svg(width="100vw",height="100vh")
    g
      template(v-for="(rythmWeight, i) in rythmWeights")
        g(:class="rythm")
        rect(:x="rythm.x[i]" :y="0" :width="rythm.width[i]" :height="bar.height" fill="white")
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
        let rythmBarXpos = []
        let x = 0
        this.rythmWeights.forEach((val, i) => {
          let width = (val / sumOfRythm) * window.innerWidth
          rythmBarWidth[i] = width
          rythmBarXpos[i] = x
          x = x + width
        })
        return {width: rythmBarWidth, x: rythmBarXpos}
      }
    }
  }
</script>

<style scoped>
  rect {
    border: #2c3e50;
    border: 2px;
  }

</style>
