<template lang="pug">
    svg(width="100vw", height="100vh", ref="svgContainer")
        g(:transform="`translate(${canvasSize.width/2}, ${canvasSize.height/2})`")
          template(v-for="(segment, i) in segments")
            g(class="segment", @click="() => {handleClick(i)}",
              :fill="colors[i]", stroke="black", stroke-width="10")
              svg-arc(:x="arc.x", :y="arc.y",
                      :rx="arc.rx", :ry="arc.ry",
                      :closed="arc.closed", :pieChart="arc.pieChart",
                      :start="segment[0]", :end="segment[1]")
          circle(:cx="arc.x", :cy="arc.y", r="8", fill="black")
</template>

<script>
import svgArc from './svg-elements/svg-arc'

export default {
  components: {
    svgArc
  },
  data () {
    return {
      values: [
        0, 0.2, 0.44, 0.55, 0.7, 1
      ],
      colors: [
        'red', 'limegreen', 'lightblue', 'orange', 'pink'
      ],
      arc: {
        x: 0,
        y: 0,
        rx: 200,
        ry: 100,
        closed: false,
        pieChart: true
      }
    }
  },
  mounted () {
  },
  computed: {
    canvasSize () {
      if (this.$refs.svgContainer) {
        return {
          width: this.$refs.svgContainer.clientWidth,
          height: this.$refs.svgContainer.clientHeight
        }
      }
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    time () {
      return this.$store.state.time
    },
    segments () {
      const _this = this
      let segments = []
      let lastVal = 0.0
      this.values.forEach((val, i) => {
        val += _this.time * 0.0001
        if (i > 0) {
          segments.push([lastVal, val])
        }
        lastVal = val
      })
      return segments
    }
  },
  methods: {
    handleClick (i) {
      console.log('Clicked segment', i)
    }
  }
}
</script>

<style scoped>
.segment:hover {
  cursor: hand;
  stroke: #888;
}
</style>
