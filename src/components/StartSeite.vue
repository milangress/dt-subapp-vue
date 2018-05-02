<template lang="pug">
  div#tools
    router-link(:to="{path: tool.path}").tool(v-for="tool in tools")
      h1 {{tool.name}}
</template>

<script>
  export default {
    name: 'StartSeite',
    data () {
      return {
        tools: [
          {
            name: 'Mr. Griddle',
            path: '/mr-griddle'
          },
          {
            name: 'Rezepte',
            path: '/lost-in-space'
          },
          {
            name: 'Lost in Space',
            path: '/lost-in-space'
          },
          {
            name: 'Video Tool',
            path: '/lost-in-space'
          }
        ]
      }
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
