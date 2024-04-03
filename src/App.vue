<script>
import { state } from './state.js'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      state,
      movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=3d400e0ed0f9cd54b51de374af445077&query=',
      serieApi: 'https://api.themoviedb.org/3/search/tv?api_key=3d400e0ed0f9cd54b51de374af445077&query=',
      userSearchValue: '',
      rating:[],
    }
  },
  methods: {
    search() {
      state.addMovie(`${this.movieApi}+${this.userSearchValue}`)
      state.addSerie(`${this.serieApi}+${this.userSearchValue}`)
    }
  },
  mounted() {

  }
}
</script>

<template>
  <div>
    <input type="text" v-model="userSearchValue">
    <button type="button" @click="search()">Search</button>
  </div>

  <div v-if="state.movies.length > 0">
    <h2>FILM</h2>
    <ul>
      <li v-for="movie in state.movies">
        <img :src="'https://image.tmdb.org/t/p/w342/'+ movie.poster_path" alt="">
        {{ movie.title }} , {{ movie.original_title }} , 
        <i :class="'fi fi-' + movie.original_language"
          v-if="movie.original_language != 'en' && movie.original_language != 'ja' && movie.original_language != 'zh'"></i>

        <img src="/img/en.png" alt="" width="30px" v-if="movie.original_language === 'en'"> <img
          src="/img/ja.png" alt="" width="30px" v-if="movie.original_language === 'ja'"> <img
          src="/img/zh.png" alt="" width="25px" v-if="movie.original_language === 'zh'">,
          <i class="fa fa-star" v-for="star in Math.round(movie.vote_average.toFixed(0)/2)"></i>
          <i class="fa-regular fa-star"  v-for="starEmpty in 5-Math.round(movie.vote_average.toFixed(0)/2)"></i>
      </li>
    </ul>
  </div>

  <div v-if="state.series.length > 0">
    <h2>SERIE TV</h2>
    <ul>
      <li v-for="serie in state.series">
        <img :src="'https://image.tmdb.org/t/p/w342/'+ serie.poster_path" alt="">
        {{ serie.name }}, {{ serie.original_name }}, 
        <i :class="'fi fi-' + serie.original_language"
          v-if="serie.original_language != 'en' && serie.original_language != 'ja' && serie.original_language != 'zh'"></i>

        <img src="/img/en.png" alt="" width="30px" v-if="serie.original_language === 'en'"> <img
          src="/img/ja.png" alt="" width="30px" v-if="serie.original_language === 'ja'"> <img
          src="/img/zh.png" alt="" width="25px" v-if="serie.original_language === 'zh'">, 
          <i class="fa fa-star" v-for="star in Math.round(serie.vote_average.toFixed(0)/2)"></i>
          <i class="fa-regular fa-star"  v-for="starEmpty in 5-Math.round(serie.vote_average.toFixed(0)/2)"></i>
      </li>
    </ul>
  </div>


</template>

<style></style>
