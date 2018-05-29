<template lang="pug">
  svg(width="100vw",height="100vh" @click="() => {makePoint()}")
    g
      template(v-for="(rythmBar, i) in rythm")
        g(class="bar")
        rect(:x="rythmBar * i" :y="0" :width="rythmBar" :height="height" :fill="black")
</template>

<script>
  export default {
    data () {
      return {
        rythmWeight: [
          1, 2, 1, 1
        ],
        height: window.innerHeight
      }
    },
    computed: {
      rythm: function () {
        let sumOfRythm = this.rythmWeight.reduce(function (acc, val) {
          return acc + val
        })
        let rythmBarWidth = []
        this.rythmWeight.forEach((val, i) => {
          let windowWith = window.innerWidth
          rythmBarWidth[i] = (val / sumOfRythm) * windowWith
        })
        return rythmBarWidth
      }
    }
  }
</script>

<style scoped>

</style>
