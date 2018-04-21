<template lang="pug">
  svg(width="100vw", height="100vh")
    g(:transform="`translate(${svgSize.width/2}, ${svgSize.height/2})`")
      line(v-for="(line, i) in lines", :key="`line-${i}-${line.id}`",
        :id="line.id",
        :x1="line.x1", :y1="line.y1",
        :x2="line.x2", :y2="line.y2")
</template>

<script>
  import Skeleton from '@/components/helpers/skeleton'

  const skeleton = new Skeleton()

  export default {
    data () {
      return {
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
      lines () {
        let nextTs = Math.round(this.$store.state.time / 300)
        if (nextTs > this.currentTime) {
          skeleton.rotate()
          this.currentTime = nextTs
        }
        return skeleton.getEdges()
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
