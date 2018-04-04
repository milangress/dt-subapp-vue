<template lang="pug">
  svg(width="100vw", height="100vh")
   g(@mousedown="initDraw", @mousemove="draw", @mouseup="stopDraw")
    rect(:x="svgSize.width / 2 - svgSize.width /2 * 0.85", :y="svgSize.height /2 - svgSize.height /2 * 0.85" width="85%",
          height="85%", fill="white", stroke="grey", stroke-width="3")
    polyline(v-for="(d, i) in colors", :class="{drawing: true}",
            :style="{'stroke': selectedColor, 'stroke-dasharray': pathLength, 'stroke-dashoffset': time}",
            :points="path", fill="none", stroke-linejoin="round")
   g
    circle(cx="50", cy="20%", r="20", stroke="grey", stroke-width="2" fill="white", @click="play")
    circle(v-for="(d, i) in colors", cx="50", :cy="circlesY(i)", r="20", stroke="grey", stroke-width="2", :fill="d",
            @click="selectColor(i)")
</template>

<script>

export default {
  data () {
    return {
      points: [],
      path: '',
      drag: false,
      animate: false,
      pathLength: 0,
      colors: ['#83AE9B', '#C8C8A9', '#F9CDAE', '#F69A9A', '#EF4566'],
      selectedColor: '#000000'
    }
  },

  computed: {
    time () {
      return this.animate ? this.pathLength - (this.$store.state.time * 0.1) % this.pathLength : 0
    },
    svgSize () {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  methods: {

    initDraw () {
      this.drag = true
      this.path = ''
      this.points = []
    },
    draw (event) {
      let x = event.clientX
      let y = event.clientY
      if (this.drag) {
        this.points.push(x + ',' + y)
        this.path = this.points.join(' ')
      }
      this.pathLength = this.$el.querySelector('.drawing').getTotalLength()
      console.log(this.pathLength)
    },
    stopDraw () {
      this.drag = false
    },
    play () {
      this.animate = true
    },
    circlesY (i) {
      return this.svgSize.height / 2 * 0.85 + i * 50
    },
    selectColor (i) {
      this.selectedColor = this.colors[i]
    }
  }
}
</script>

<style scoped>
  svg {
    position: absolute;
    top: 0;
    right: 0;
     bottom: 0;
    left: 0;
  }
  .drawing {
    stroke-width: 4;
    stroke-linecap: round;
  }

</style>
