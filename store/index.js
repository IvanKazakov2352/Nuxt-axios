import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
      posts: []
  },
  actions: {
    loadPosts ({commit}) {
        Axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then(data => {
            let posts = data.data
            commit('SET_POSTS', posts)
        })
        .catch(error => {
            console.log(error)
        })
    }
  },
  mutations: {
      SET_POSTS (state, posts) {
          state.posts = posts
      }
  }
})

export default store