<template lang="pug">
  div
    svg(width="100vw",height="100vh")
      g.bars
        template(v-for="(rythmWeight, i) in rythmWeights")
          //g(class="rythmBar" :transform="xTranslateSyntax(rythm.x[i])")
          //https://www.sarasoueidan.com/blog/mimic-relative-positioning-in-svg/
          svg(:x="rythm.x[i]" :width="rythm.width[i]")
            rect(x="0" y="0" width="100%" height="100%" fill="darkgrey" stroke="black")
      g#pulse
        rect(x="0" y="0" width="100%" height="100%" fill="white" v-show="pulse")
      g.time-bar
        rect(:x="0" y="0" :width="timeLooptoPercent(getTimeLoop())" height="100%" fill="url(#verlauf)" stroke="none")
      g#interface
        ellipse(cx="90%" cy="90%" rx="14" ry="14" fill="black" stroke="black" @click="() => {removeBar()}")
        ellipse(cx="95%" cy="90%" rx="14" ry="14" fill="white" stroke="black" @click="() => {addBar()}")
        template(v-for="(rythmWeight, i) in rythmWeights")
          svg(:x="rythm.x[i]" :width="rythm.width[i]")
            ellipse(cx="50%" cy="5%" rx="14" ry="14" fill="black" stroke="black" @click="() => {minusRythmWeight(i)}")
            ellipse(cx="50%" cy="10%" rx="14" ry="14" fill="white" stroke="black" @click="() => {addRythmWeight(i)}")
      linearGradient#verlauf
        stop(offset="0%" stop-color="white")
        stop(offset="100%" stop-color="black")
    div.input-interface
      label Sekunden: {{ time }}
        input(v-model="timeLenght" size="5")
</template>

<script>
  import NetworkClock from '../lib/network-clock'
  export default {
    data () {
      return {
        rythmWeights: [
          10, 20, 10, 10
        ],
        timeLenght: 10,
        playing: {},
        sounds: {pulse: 'knock.ogg'},
        netClock: new NetworkClock(),
        time: 0
      }
    },
    mounted () {
      const _this = this
      setInterval(() => {
        _this.time = this.netClock.getTime()
      }, 40)
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
      },
      getTimeLoop () {
        let timeFactor = this.timeLenght * 1000
        return this.time % timeFactor / timeFactor
      },
      addRythmWeight: function (pos) {
        let newValue = this.rythmWeights[pos] + 5
        this.$set(this.rythmWeights, pos, newValue)
      },
      minusRythmWeight: function (pos) {
        let newValue = this.rythmWeights[pos] - 5
        this.$set(this.rythmWeights, pos, newValue)
      },
      // Play Sound (q&d weil Audio API nicht überlagern kann)
      player: function (soundfile) {
        let b = new Date()
        let a = soundfile + b.getTime()
        this.playing[a] = new Audio(this.sounds[soundfile])
        this.playing[a].onended = function () {
          delete this.playing[a]
        }
        this.playing[a].play()
      }
    },
    computed: {
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
        let timeRound = Math.round(this.getTimeLoop() * 100)
        return this.rhytmTime.includes(timeRound)
      }
    }
  }
</script>

<style scoped>
  .bars rect {
    stroke: #fff;
    border: 5px;
  }
  .time-bar {
    opacity: 0.5;
    pointer-events: none;
  }
  .input-interface {
    position: absolute;
    bottom: 5vh;
    left: 2vh;
  }

</style>
