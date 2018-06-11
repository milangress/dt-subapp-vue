<template lang="pug">
  div
    svg(width="100vw",height="100vh")
      defs
        linearGradient#verlauf
          stop(offset="50%" stop-color="#FFF")
          stop(offset="100%" stop-color="#000")
        symbol#plus(viewBox="0 0 100 100")
          rect(x="33px" y="0" width="33px" height="100px" fill="black")
          rect(x="0" y="33px" width="100px" height="33px" fill="black")
        symbol#minus(viewBox="0 0 100 100")
          rect(x="0" y="33px" width="150px" height="33px" fill="black")
      g.time-bar
        rect(:x="timeLooptoPercent(getTimeLoop())" y="0" width="100%" height="100%" fill="url(#verlauf)" stroke="none")
      g.bars
        template(v-for="(rhythmWeight, i) in rhythmWeights")
          //g(class="rhythmBar" :transform="xTranslateSyntax(rhythm.x[i])")
          //https://www.sarasoueidan.com/blog/mimic-relative-positioning-in-svg/
          svg(:x="rhythm.x[i]" :width="rhythm.width[i]")
            rect(x="0" y="0" width="100%" height="100%" fill="none" stroke="black")
      g#pulse
        rect(x="0" y="0" width="100%" height="100%" fill="white" v-show="pulse")
      g#interface
        use(href="#minus" x="90%" y="90%" width="50" height="50" @click="() => {removeBar()}")
        use(href="#plus" x="95%" y="90%" width="50" height="50" @click="() => {addBar()}")
        template(v-for="(rhythmWeight, i) in rhythmWeights")
          svg(:x="rhythm.x[i]" :width="rhythm.width[i]")
            use(href="#plus" x="15px" y="50px" width="40" height="40" @click="() => {addRhythmWeight(i)}")
            use(href="#minus" x="15px" y="120px" width="40" height="40" @click="() => {minusRhythmWeight(i)}")
    //audio(src="../assets/beep.mp3")
    div.input-interface
      label Sekunden:
        input(v-model="timeLength" size="5")
</template>

<script>
  import NetworkClock from '../lib/network-clock'
  export default {
    data () {
      return {
        rhythmWeights: [
          10, 20, 10, 10
        ],
        timeLength: 10,
        playing: {},
        sounds: {pulse: '../assets/beep.mp3'},
        netClock: new NetworkClock(),
        time: 0,
        lastPulseTime: 0
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
        let sumOfRhythm = this.rhythmWeights.reduce(function (acc, val) {
          return acc + val
        })
        return (weight / sumOfRhythm)
      },
      addBar: function () {
        this.rhythmWeights.push(10)
      },
      removeBar: function () {
        this.rhythmWeights.pop()
      },
      timeLooptoPercent: function (timeLoop) {
        return (timeLoop * 100) - 100 + '%'
      },
      getTimeLoop () {
        let timeFactor = this.timeLength * 1000
        return (this.time % timeFactor) / timeFactor
      },
      addRhythmWeight: function (pos) {
        let newValue = this.rhythmWeights[pos] + 5
        this.$set(this.rhythmWeights, pos, newValue)
      },
      minusRhythmWeight: function (pos) {
        let newValue = this.rhythmWeights[pos] - 5
        this.$set(this.rhythmWeights, pos, newValue)
        if (newValue <= 0) {
          this.rhythmWeights.splice(pos, 1)
        }
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
      rhythm: function () {
        let rhythmFactor = []
        let rhythmBarWidth = []
        let rhythmBarXpos = []
        let x = 0
        this.rhythmWeights.forEach((val, i) => {
          let barFactor = this.weightToFactor(val)
          let width = barFactor * 100
          rhythmFactor[i] = barFactor
          rhythmBarWidth[i] = width + '%'
          rhythmBarXpos[i] = x + '%'
          x = x + width
        })
        return {width: rhythmBarWidth, x: rhythmBarXpos, factor: rhythmFactor}
      },
      rhythmTime: function () {
        let timeArray = []
        let time = 0
        this.rhythm.factor.forEach(function (weight) {
          time = weight + time
          timeArray.push(Math.round(time * 100))
        })
        return timeArray
      },
      pulse: function () {
        let timeNow = this.getTimeLoop() * 100
        let pulseNow = this.rhythmTime.filter(t => {
          return timeNow < t
        }).shift()
        let doPulse = this.lastPulseTime !== pulseNow
        this.lastPulseTime = pulseNow
        return doPulse
      }
    }
  }
</script>

<style scoped>
  div svg {
    background: darkgray;
  }
  .bars rect {
    stroke: #fff;
    stroke-width: 3px;
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
