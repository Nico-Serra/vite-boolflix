<script>
import { state } from '../state.js'
export default {
  name: 'CardSerie',
  data() {
    return {
      state
    }
  },
  props: {
    serie: Object,
  }
}
</script>

<template>
  <div class="col">
    <div class="card">
      <div class="card_image">
        <img :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path" alt="">
      </div>


      <div class="info">
        <h2>Serie Tv</h2>
        <p>Title: {{ serie.name }}</p>
        <p>Original Title: {{ serie.original_name }} </p>
        <div class="flag">
          <span>Language:  </span>
          <i :class="'fi fi-' + serie.original_language"
            v-if="serie.original_language != 'en' && serie.original_language != 'ja' && serie.original_language != 'zh'"></i>

          <img src="/img/en.png" alt="" width="30px" v-if="serie.original_language === 'en'"> <img src="/img/ja.png"
            alt="" width="30px" v-if="serie.original_language === 'ja'"> <img src="/img/zh.png" alt="" width="25px"
            v-if="serie.original_language === 'zh'">,
        </div>
        <div class="star">
          <i class="fa fa-star" v-for="star in Math.round(serie.vote_average.toFixed(0) / 2)"></i>
          <i class="fa-regular fa-star" v-for="starEmpty in 5 - Math.round(serie.vote_average.toFixed(0) / 2)"></i>
        </div>

        <p>Overview: {{ serie.overview }}</p>
      </div>

    </div>
  </div>


</template>

<style></style>