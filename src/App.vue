<template>
  <div id="app">

    <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6 col-md-auto">

              <div class="input-group mb-3">
                  <input type="text" class="form-control"
                         placeholder="Start your Git search..."
                         aria-label="Recipient's username"
                         aria-describedby="basic-addon2"
                         v-model="gitSearchValue"
                         v-on:keyup.enter="startGitSearch(gitSearchValue)"
                  >

                  <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" @click="startGitSearch(gitSearchValue)">Search</button>
                  </div>
              </div>


            <git-item v-for="result in gitSearchResult.items" :key="result.id" :result="result"></git-item>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import GitItem from './components/GitItem'

export default {
  name: 'app',

  data () {
    return {
      gitSearchValue: ''
    }
  },

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
    getGitSearchResult (query) {
      let payload = {
        url: this.getURL(query)
      }
      this.$store.dispatch('getGitSearchResult', payload)
    },
    startGitSearch (query) {
      this.getGitSearchResult(query)
      this.gitSearchValue = ''
    }
  },

  mounted () {
    this.getGitSearchResult()
  }

}
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap.scss';
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
