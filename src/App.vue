<script>
import {state} from './state.js'


export default {
  data(){
    return{
      state,
      movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=3d400e0ed0f9cd54b51de374af445077&query=avengers',
    }
  },
  mounted(){
    state.addElement(this.movieApi),
    console.log(this.state.results);
  }
}
</script>

<template>
  <!-- <ul>
    <li v-for="movie in state.movies">{{ movie.title }}</li>
  </ul> -->
</template>

<style>

</style>
