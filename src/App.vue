<script>
import { state } from './state.js'
import AppHeader from './components/AppHeader.vue';
import CardSerie from './components/CardSerie.vue'
import CardMovie from './components/CardMovie.vue'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      state,

    }
  },
  methods: {
    search() {
      state.addMovie(`${state.movieApi}+${state.userSearchValue}`)
      state.addSerie(`${state.serieApi}+${state.userSearchValue}`)
    }
  },
  components: {
    AppHeader,
    CardSerie,
    CardMovie
  },
  mounted() {

  }
}
</script>

<template>
  <AppHeader @clickOnSearch="search" />

  <div v-if="state.movies.length > 0">

    <div class="container">
      <div class="row">

        <CardMovie :movie="movie" v-for="movie in state.movies" />
        <CardSerie :serie="serie" v-for="serie in state.series" />



      </div>

    </div>
  </div>

  <!-- <div v-if="state.series.length > 0">
    <h2>SERIE TV</h2>
    <div class="container">
      <div class="row">
        <div class="col">
          
        </div>
      </div>

    </div>
  </div> -->


</template>

<style>

</style>
