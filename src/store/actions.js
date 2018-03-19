import Vue from 'vue'

export default {
  getGitSearchResult (context, payload) {
    Vue.http.get(payload.url).then(function (response) {
      context.commit('GET_SEARCH_RESULT', response.body)
      context.commit('GET_TOTAL_SEARCH_RESULT', response.body.total_count)
    })
  }
}
