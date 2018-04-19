<template lang="pug">
  div
    div#timelines(v-if="loggedIn")
      | We have {{ timelines.length }} timelines.
      button(v-on:click="listTimelines") Fetch Timelines
    div#loginbox(v-if="!loggedIn")
      input(type="text", v-model="payload.email", placeholder="email")
      input(type="password", v-model="payload.password", placeholder="password")
      button(v-on:click="loginUser") Login
</template>

<script>
  export default {
    data () {
      return {
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
            console.log(err)
            window.alert(err.message)
          })
      },
      listTimelines () {
        if (!this.loggedIn) return
        const _this = this
        this.$store.dispatch('maps/find', { query: { type: 'Timeline' } })
          .then(timelines => {
            console.log(timelines)
            _this.timelines = timelines
          })
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
</style>
