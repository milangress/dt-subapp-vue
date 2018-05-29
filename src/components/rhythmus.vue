<template lang="pug">
  svg(width="100vw",height="100vh")
    g
      template(v-for="(rythmWeight, i) in rythmWeights")
        g(:class="rythm")
        rect(:x="rythm.x[i]" :y="0" :width="rythm.width[i]" :height="bar.height" fill="grey" stroke="black")
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
    methods: {
      weightToFactor (weight) {
        let sumOfRythm = this.rythmWeights.reduce(function (acc, val) {
          return acc + val
        })
        return (weight / sumOfRythm)
      },
      factorToWidth (percent) {
        return percent * window.innerWidth
      }
    },
    computed: {
      rythm: function () {
        let rythmBarWidth = []
        let rythmBarXpos = []
        let x = 0
        this.rythmWeights.forEach((val, i) => {
          let width = this.factorToWidth(this.weightToFactor(val))
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
