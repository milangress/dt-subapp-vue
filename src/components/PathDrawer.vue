<template lang="pug">
  svg(width="100vw", height="100vh")
   g(@mousedown="initDraw", @mousemove="draw", @mouseup="stopDraw")
    rect(:x="svgSize.width / 2 - svgSize.width /2 * 0.85", :y="svgSize.height /2 - svgSize.height /2 * 0.85" width="85%",
          height="85%", fill="white", stroke="grey", stroke-width="3")
    polyline(:class="{drawing: true, animation: animate}", :style="{'stroke-dasharray': time, 'stroke-dashoffset': pathLength}",
            :points="path", fill="none", stroke-linejoin="round", stroke="black", stroke-width="5")
   g
    circle(cx="50", cy="20%", r="20", stroke="grey", stroke-width="2" fill="white", @click="play")
</template>

<script>

export default {
  data () {
    return {
      points: [],
      path: '',
      drag: false,
      animate: false,
      pathLength: 0
    }
  },

  computed: {
    time () {
      return this.animate ? (this.$store.state.time * 0.01) % this.pathLength : 0
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
      console.log('animate')
      this.animate = true
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
    stroke: blue;
    stroke-width: 5;
    stroke-linecap: round;
  }
  .animation {
    stroke: red;
    animation: dash 5s linear forwards;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
