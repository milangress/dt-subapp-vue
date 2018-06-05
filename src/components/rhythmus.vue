<template lang="pug">
  div
    svg(width="100vw",height="100vh")
      g
        template(v-for="(rythmWeight, i) in rythmWeights")
          g(:class="rythm")
          rect(:x="rythm.x[i]" :y="0" :width="rythm.width[i]" :height="bar.height" fill="darkgrey" stroke="black")
            rect(x="0" :y="0" :width="rythm.width[i]" height="100%" fill="darkgrey" stroke="black")
          g(:class="rythmBar" transform="translate(0,0)")
            rect(:x="rythm.x[i]" :y="0" :width="rythm.width[i]" height="100%" fill="darkgrey" stroke="black")
      g#pulse
        rect(x="0" y="0" width="100%" height="100%" fill="white" v-show="pulse")
      g
        rect(:x="0" y="45%" :width="timeLooptoPercent(timeLoop)" height="10%" fill="black" stroke="black")
      g#interface
        ellipse(cx="90%" cy="90%" rx="14" ry="14" fill="white" stroke="black" @click="() => {removeBar()}")
        ellipse(cx="95%" cy="90%" rx="14" ry="14" fill="white" stroke="black" @click="() => {addBar()}")
    div.input-interface
      label Sekunden:
        input(v-model="timeLenght" size="5")
</template>

<script>
  export default {
    data () {
      return {
        rythmWeights: [
          10, 20, 10, 10
        ],
        timeLenght: 60
      }
    },
    methods: {
      weightToFactor (weight) {
        let sumOfRythm = this.rythmWeights.reduce(function (acc, val) {
          return acc + val
        })
        return (weight / sumOfRythm)
      },
      addBar: function () {
        this.rythmWeights.push(10)
      },
      removeBar: function () {
        this.rythmWeights.pop()
      },
      timeLooptoPercent: function (timeLoop) {
        return timeLoop * 100 + '%'
      }
    },
    computed: {
      time () {
        return this.$store.state.time
      },
      rythm: function () {
        let rythmFactor = []
        let rythmBarWidth = []
        let rythmBarXpos = []
        let x = 0
        this.rythmWeights.forEach((val, i) => {
          let barFactor = this.weightToFactor(val)
          let width = barFactor * 100
          rythmFactor[i] = barFactor
          rythmBarWidth[i] = width + '%'
          rythmBarXpos[i] = x + '%'
          x = x + width
        })
        return {width: rythmBarWidth, x: rythmBarXpos, factor: rythmFactor}
      },
      timeLoop: function () {
        let timeFactor = (this.timeLenght / 6) * 1000
        return this.time % timeFactor / timeFactor
      },
      rhytmTime: function () {
        let timeArray = []
        let time = 0
        this.rythm.factor.forEach(function (weight) {
          time = weight + time
          timeArray.push(Math.round(time * 100))
        })
        return timeArray
      },
      pulse: function () {
        let timeRound = Math.round(this.timeLoop * 100)
        return this.rhytmTime.includes(timeRound)
      }
    }
  }
</script>

<style scoped>
  rect {
    stroke: #fff;
    border: 5px;
  }
  .input-interface {
    position: absolute;
    bottom: 5vh;
    left: 2vh;
  }

</style>
