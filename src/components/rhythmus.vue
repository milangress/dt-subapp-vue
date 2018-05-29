<template lang="pug">
  svg(width="100vw",height="100vh")
    g
      template(v-for="(rythmWeight, i) in rythmWeights")
        g(:class="rythm")
        rect(:x="rythm.x[i]" :y="0" :width="rythm.width[i]" :height="bar.height" fill="grey" stroke="black")
    g
      rect(:x="0" :y="bar.height/2" :width="timeLoop" height="100px" fill="grey" stroke="black")
</template>

<script>
  export default {
    data () {
      return {
        rythmWeights: [
          10, 20, 10, 10
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
      time () {
        return this.$store.state.time
      },
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
      },
      timeLoop: function () {
        return this.factorToWidth(this.time % 10000 / 10000)
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
