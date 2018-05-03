<template lang="pug">
  div#tools
    a(:href="tool.path").tool(v-for="tool in tools", :key="tool.path")
      h1 {{tool.name}}
</template>

<script>
  import getParams from '../lib/params'
  export default {
    name: 'StartSeite',
    data () {
      return {
        tools: []
      }
    },
    async mounted () {
      const _this = this
      await this.$loginOrSignup(this.$store)
      getParams().then(params => {
        console.log(params)
        const urls = params.urls[0]

        _this.tools = [
          {
            name: 'Mr. Griddle',
            path: urls.subappVue + '/#/mr-griddle'
          },
          {
            name: 'Rezepte',
            path: urls.subappQuasar + '/allrecipes'
          },
          {
            name: 'Lost in Space',
            path: urls.subappVue + '/#/lost-in-space'
          },
          {
            name: 'Video Tool',
            path: urls.subappQuasar + '/videosequencer'
          }
        ]

        console.log(_this.tools)
      })
    }
  }
</script>

<style scoped lang="stylus">
  #tools
    display flex
    flex-direction row
    flex-wrap wrap

  .tool
    flex-grow 1
    min-width 200px
</style>
