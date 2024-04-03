<script>
import {state} from './state.js'
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
    <li v-for="movie in state.movies">{{ movie.title }} , {{ movie.original_title }} , <i :class="'fi fi-'+ movie.original_language" v-if="movie.original_language != 'en' && movie.original_language != 'ja' && movie.original_language != 'zh' "></i> <img src="/public/img/en.png" alt="" width="30px" v-if="movie.original_language==='en'"> <img src="/public/img/ja.png" alt="" width="30px" v-if="movie.original_language==='ja'"> <img src="/public/img/zh.png" alt="" width="30px" v-if="movie.original_language==='zh'">, {{ movie.vote_average }}</li>
  </ul>
</template>

<style>

</style>
