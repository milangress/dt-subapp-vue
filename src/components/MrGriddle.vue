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
           :x2="line.x2 * gridCell.width", :y2="line.y2 * gridCell.height",
           @click="randomizeGrid")
</template>

<script>
  const DIRECTIONS = [
    {x: 0, y: -1},
    {x: 1, y: -1},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 0, y: 1},
    {x: -1, y: 1},
    {x: -1, y: 0},
    {x: -1, y: -1}
  ]
  export default {
    data () {
      return {
        grid: {
          columns: 12,
          rows: 8
        },
        lines: []
      }
    },
    mounted () {
      this.randomizeGrid()
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
      }
    },
    methods: {
      randomizeGrid () {
        let lines = []
        for (let i = 0; i < 100; i++) {
          let line = {
            x1: 1 + Math.round(Math.random() * (this.grid.columns - 2)),
            y1: 1 + Math.round(Math.random() * (this.grid.rows - 2))
          }
          let dir = DIRECTIONS[Math.floor(Math.random() * 8)]
          line.x2 = line.x1 + dir.x
          line.y2 = line.y1 + dir.y
          lines.push(line)
        }
        this.lines = lines
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
    stroke-width: 20;
    stroke-linecap: round;
  }
  line:hover {
    stroke: red;
  }
</style>
