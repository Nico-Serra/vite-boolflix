<script>
import {state} from './state.js'


export default {
  data(){
    return{
      state,
      movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=3d400e0ed0f9cd54b51de374af445077&query=',
      userSearchValue: '',
    }
  },
  methods: {
    searchMovie(){
      state.addElement(`${this.movieApi}+${this.userSearchValue}`)
    }
  },
  mounted(){

  }
}
</script>

<template>
  <div>
    <input type="text" v-model="userSearchValue">
    <button type="button" @click="searchMovie()">Search</button>
  </div>

  <ul>
    <li v-for="movie in state.movies">{{ movie.title }} , {{ movie.original_title }} , {{ movie.original_language }} , {{ movie.vote_average }}</li>
  </ul>
</template>

<style>

</style>
