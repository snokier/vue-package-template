<template>
  <div id="app">
    <header>
      <h1>{{ name }}</h1>

      <p>
        <span class="description">{{ description }}</span>
        <iframe
          class="gh-star"
          scrolling="0"
          width="170px"
          height="20px"
          src="https://ghbtns.com/github-btn.html?user=XBT1&repo={{ name }}&type=star&count=true" frameborder="0" >
        </iframe>
      </p>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {}
    },
  }
</script>

<style lang="stylus" scoped>
  #app
    max-width: 1000px
    margin: 0 auto
</style>

<style lang="stylus">
  html
    height: 100%

  body
    height: 100%
    color: #333
    font-size: 16px
    line-height: 1.5
</style>
