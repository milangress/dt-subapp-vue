<template lang="pug">
  svg(width="100vw", height="100vh")
    defs
      pattern(id="cell-pattern", :width="gridCell.width", :height="gridCell.height", patternUnits="userSpaceOnUse")
        path(:d="`M ${gridCell.width} 0 L 0 0 0 ${gridCell.height}`",
             fill="none", stroke="gray", stroke-width="3")
    g
      rect(width="100%", height="100%", fill="url(#cell-pattern)")
      line(v-for="(line, i) in lines", :key="`line-${i}`",
           :x1="line.x1 * gridCell.width", :y1="line.y1 * gridCell.height",
           :x2="line.x2 * gridCell.width", :y2="line.y2 * gridCell.height")
</template>

<script>
  import Skeleton from '@/components/helpers/skeleton'

  const skeleton = new Skeleton()

  export default {
    data () {
      return {
        grid: {
          columns: 36,
          rows: 12
        },
        currentTime: 0
      }
    },
    mounted () {
    },
    computed: {
      svgSize () {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      gridCell () {
        return {
          width: this.svgSize.width / this.grid.columns,
          height: this.svgSize.height / this.grid.rows
        }
      },
      lines () {
        let nextTs = Math.round(this.$store.state.time / 300)
        if (nextTs > this.currentTime) {
          skeleton.rotate()
          this.currentTime = nextTs
        }
        let skeletonLines = skeleton.getEdges()
        let x = Math.round(this.grid.columns / 2)
        let y = Math.round(this.grid.rows / 2)
        let w = this.gridCell.width
        let h = this.gridCell.height
        return skeletonLines.map(line => {
          return {
            x1: x + Math.round(line.x1 / w),
            y1: y + Math.round(line.y1 / h),
            x2: x + Math.round(line.x2 / w),
            y2: y + Math.round(line.y2 / h)
          }
        })
      }
    },
    methods: {
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
  line {
    stroke: blue;
    stroke-width: 20;
    stroke-linecap: round;
  }
  line:hover {
    stroke: red;
  }
</style>
