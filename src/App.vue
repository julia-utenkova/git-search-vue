<template>
  <div id="app">

    <div class="container">
      <div class="col-md-12">
        <div class="search-module form-inline">

          <div class="form-group row">
            <label for="gitSearchValue" class="col-sm-3 col-form-label">Git Search</label>
            <div class="col-sm-5">
              <input type="email" class="form-control" id="gitSearchValue" placeholder="Email">
            </div>
            <div class="col-sm-4">
              <button type="button" class="btn btn-primary mb-2" id="gitSearchBtn">Search</button>
            </div>
          </div>

        </div>
        <git-item></git-item>
      </div>
    </div>

  </div>
</template>

<script>
import GitItem from './components/GitItem'

export default {
  name: 'app',

  components: {
    'git-item': GitItem
  },

  computed: {
    gitSearchResult () {
      return this.$store.state.getSearchResult
    }
  },

  methods: {
    getURL (query, srsearch = 1, rclimit = 10) {
      const URL = 'https://api.github.com/search/repositories?'

      let q = query || 'es6'
      let page = srsearch
      let perPage = rclimit

      let generatedUrl = `${URL}q=${q}&page=${page}&per_page${perPage}`

      return generatedUrl
    },
    getGitSearchResult () {
      let payload = {
        url: this.getURL()
      }
      this.$store.dispatch('getGitSearchResult', payload)
    }
  },

  mounted () {
    this.getGitSearchResult()
  }

}
</script>

<style>
/*body {*/
  /*margin: 0;*/
/*}*/

/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
/*}*/

/*main {*/
  /*text-align: center;*/
  /*margin-top: 40px;*/
/*}*/

/*header {*/
  /*margin: 0;*/
  /*height: 56px;*/
  /*padding: 0 16px 0 24px;*/
  /*background-color: #35495E;*/
  /*color: #f1f1f1;*/
/*}*/

/*header span {*/
  /*display: block;*/
  /*position: relative;*/
  /*font-size: 20px;*/
  /*line-height: 1;*/
  /*letter-spacing: .02em;*/
  /*font-weight: 400;*/
  /*box-sizing: border-box;*/
  /*padding-top: 16px;*/
/*}*/
</style>
