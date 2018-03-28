<template lang="pug">
  div
    svg(:width="svgSize.width", :height="svgSize.height")
      g
        circle(:cx="circlePos.x", :cy="circlePos.y", r="20")
    div#timelines(v-if="loggedIn")
      | We have {{ timelines.length }} timelines.
      button(:click="listTimelines") Fetch Timelines
    div#loginbox(v-if="!loggedIn")
      input(type="text", v-model="payload.email", placeholder="email")
      input(type="password", v-model="payload.password", placeholder="password")
      button(v-on:click="loginUser") Login
</template>

<script>
export default {
  data () {
    return {
      radius: 200,
      payload: {
        strategy: 'local',
        username: undefined,
        password: undefined
      },
      loggedIn: false,
      timelines: []
    }
  },
  methods: {
    loginUser () {
      const _this = this
      return this.$store.dispatch('auth/authenticate', _this.payload)
        .then(() => {
          _this.loggedIn = true
        })
        .catch(err => {
          _this.loggedIn = false
          console.log(err.message, err)
        })
    },
    listTimelines () {
      if (!this.loggedIn) return
      const _this = this
      this.$store.dispatch('maps/find', { query: { type: 'Timeline' } })
        .then(timelines => {
          _this.timelines = timelines
        })
    }
  },
  computed: {
    currentTime () {
      return this.$store.state.time
    },
    svgSize () {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    center () {
      return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    },
    circlePos () {
      const _this = this
      return {
        x: _this.center.x + _this.radius * Math.cos(_this.currentTime * 0.0005),
        y: _this.center.y + _this.radius * Math.sin(_this.currentTime * 0.0005)
      }
    }
  }
}
</script>

<style scoped>
#loginbox, #timelines {
  position: absolute;
  left: 20px;
  top: 20px;
}
circle {
  fill: #999;
  stroke: #333;
}
</style>
