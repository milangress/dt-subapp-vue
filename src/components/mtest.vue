<template lang="pug">
  svg(width="100vw",height="100vh" @click="() => {makePoint()}")
    g
      template(v-for="(color, i) in colors")
        g(class="segment", @click="() => {handleClick(i)}",
        :fill="colors[i]")
        text(:x="50", :y="i * 50 + 50") {{ colors[i] }}
        rect(:x="20" :y="i * 50 + 40" :width="10" :height="10" :fill="colors[i]")
    defs
      clipPath(id="cut-off")
        rect(:x="x-200" :y="y-200" width="400" height="400")
    polygon(:points="combinedPath" :stroke-width="pathLength")
</template>

<script>

  export default {
    data () {
      return {
        values: [
          10, 20, 30, 40, 50, 60
        ],
        colors: [
          'red', 'limegreen', 'lightblue', 'orange', 'pink'
        ],
        x: 0,
        y: 0,
        points: [],
        path: '',
        pathLength: 0
      }
    },
    computed: {
      time () {
        return this.$store.state.time
      },
      combinedPath: function () {
        return this.startpoint + ', ' + this.points
      },
      startpoint: function () {
        let valX = 500 * Math.sin(this.time * 0.005) + (window.innerWidth / 2)
        let valY = 500 * Math.sin(this.time * 0.005) + (window.innerHeight / 2)
        return valX + ' ' + valY
      }
    },
    methods: {
      handleClick (i) {
        console.log('Clicked segment', this.colors[i])
      },
      makePoint () {
        let x = event.clientX
        let y = event.clientY
        this.points.push(x + ',' + y)
        this.path = this.points.join(' ')
        this.pathLength = this.path.length / 6
        this.x = x
        this.y = y
      }
    }
  }
</script>

<style scoped>
  polyline {
    fill: none;
    stroke: #ff0000;
  }
</style>
