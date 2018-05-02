<template lang="pug">
  svg(width="100vw", height="100vh",
    @mousemove="doResizeCell", @mouseup="stopResizeCell")
    defs
      pattern(id="cell-pattern", :width="gridCell.width", :height="gridCell.height", patternUnits="userSpaceOnUse")
        path(:d="`M ${gridCell.width} 0 L 0 0 0 ${gridCell.height}`",
             fill="none", stroke="gray", stroke-width="3")
    g
      rect(width="100%", height="100%", fill="url(#cell-pattern)")
      line(v-for="(line, i) in lines", :key="`line-${i}`",
           :x1="line.x1 * gridCell.width", :y1="line.y1 * gridCell.height",
           :x2="line.x2 * gridCell.width", :y2="line.y2 * gridCell.height")
      ellipse#resize-handle(
        :cx="gridCell.width", :cy="gridCell.height",
        rx="10", ry="10",
        @mousedown="initResizeCell", :class="{resizing: resizingCell}")
</template>

<script>
  import Skeleton from '@/components/helpers/skeleton'

  const skeleton = new Skeleton()

  export default {
    data () {
      return {
        grid: {
          columns: 9,
          rows: 16
        },
        currentTime: 0,
        resizingCell: false,
        lastFrameTime: -1,
        frameLength: 1000 / 1.0,
        lines: []
      }
    },
    mounted () {
      this.bruteForceLogin()
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
      nextFrame () {
        return (this.$store.state.time - this.lastFrameTime) >= this.frameLength
      }
    },
    watch: {
      nextFrame () {
        this.lastFrameTime = this.$store.state.time
        skeleton.rotate()
        this.updateSkeleton()
        this.storeSkeleton()
      }
    },
    methods: {
      bruteForceLogin () {
        let user = window.localStorage.getItem('user')
        if (user) {
          user = JSON.parse(user)
          this.$store.dispatch('auth/authenticate', user)
            .then(() => {
            })
            .catch(err => {
              console.log(err)
            })
        }
      },
      storeSkeleton () {
        let annotation = {
          body: {
            type: 'MrGriddleSkeleton',
            purpose: 'linking',
            value: JSON.stringify({
              skeleton: skeleton.getEdges(),
              grid: this.grid,
              gridCell: this.gridCell,
              svgSize: this.svgSize
            })
          },
          author: this.$store.state.auth.payload.userId
        }
        this.$store.dispatch('annotations/create', annotation).then((resp) => {
          console.log(resp)
        })
      },
      initResizeCell () {
        this.resizingCell = true
      },
      doResizeCell (event) {
        if (this.resizingCell) {
          this.grid.columns = Math.round(this.svgSize.width / event.clientX)
          this.grid.rows = Math.round(this.svgSize.height / event.clientY)
          this.updateSkeleton()
        }
      },
      stopResizeCell () {
        this.resizingCell = false
      },
      handleKeyUp (event) {
        console.log(event)
      },
      updateSkeleton () {
        let skeletonLines = skeleton.getEdges()
        let x = Math.round(this.grid.columns / 2)
        let y = Math.round(this.grid.rows / 2)
        let w = this.gridCell.width
        let h = this.gridCell.height
        this.lines = skeletonLines.map(line => {
          return {
            x1: x + Math.round(line.x1 / w),
            y1: y + Math.round(line.y1 / h),
            x2: x + Math.round(line.x2 / w),
            y2: y + Math.round(line.y2 / h)
          }
        })
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
  line {
    stroke: blue;
    stroke-width: 20px;
    stroke-linecap: round;
  }
  line:hover {
    stroke: red;
  }
  #resize-handle {
    fill: white;
    stroke: gray;
    stroke-width: 1;
  }
  #resize-handle:hover, #resize-handle.resizing {
    fill: gray;
  }
</style>
