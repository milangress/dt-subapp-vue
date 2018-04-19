<template lang="pug">
  g
    path(v-bind="$attrs", :stroke="(pieChart && !closed) ? 'none' : $attrs.stroke",
         :d="`M ${arcPath.x1},${arcPath.y1} A ${rx},${ry} 1 ${end - start <= 0.5 ? 0 : 1} 1 ${arcPath.x2},${arcPath.y2}` + (pieChart ? `L ${x},${y}` : '') + (closed ? `Z` : '')")
    template(v-if="pieChart && !closed")
      path(v-bind="$attrs", fill="none"
           :d="`M ${arcPath.x1},${arcPath.y1} A ${rx},${ry} 1 ${end - start <= 0.5 ? 0 : 1} 1 ${arcPath.x2},${arcPath.y2}`")

</template>

<script>
  export default {
    inheritAttrs: false,
    props: [
      'x', 'y', 'rx', 'ry', 'start', 'end', 'pieChart', 'closed'
    ],
    computed: {
      arcPath () {
        let TWO_PI = Math.PI * 2
        let radStart = TWO_PI * this.start
        let radEnd = TWO_PI * this.end
        return {
          x1: this.x + Math.cos(radStart) * this.rx,
          y1: this.y + Math.sin(radStart) * this.ry,
          x2: this.x + Math.cos(radEnd) * this.rx,
          y2: this.y + Math.sin(radEnd) * this.ry
        }
      }
    }
  }
</script>

<style scoped>

</style>
