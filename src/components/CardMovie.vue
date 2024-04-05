<script>
import axios from 'axios';
import { state } from '../state.js'
export default {
    name: 'CardMovie',
    data() {
        return {

            state,
            cast: [],
            genres: [],
        }
    },
    props: {
        movie: Object,
    },
    methods: {
        showTheCast(movie) {
            const movieID = movie.id;
            const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=3d400e0ed0f9cd54b51de374af445077`
            axios.get(url).then(resp => this.cast = resp.data.cast)
        },
        genre(movie) {
            const movieID = movie.id;
            axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=3d400e0ed0f9cd54b51de374af445077`).then(resp => this.genres = resp.data.genres)
        },
        filterMovie(genMovie){
            if (genMovie.name === state.category ) {
                return true
            }
        }

    },
    mounted() {

        this.showTheCast(this.movie)
        this.genre(this.movie)
    }
}
</script>

<template>
    <div class="col">

        <div class="card">

            <div class="card_image">
                <img :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" alt="">
            </div>

            <div class="info">
                <h2>FILM</h2>
                <h3>Title: {{ movie.title }} </h3>
                <h3 v-if="movie.title != movie.original_title">Original Title: {{ movie.original_title }} </h3>

                <div class="flag">
                    <span>Language: </span>
                    <i :class="'fi fi-' + movie.original_language"
                        v-if="movie.original_language != 'en' && movie.original_language != 'ja' && movie.original_language != 'zh'"></i>

                    <img src="/img/en.png" alt="" width="30px" v-if="movie.original_language === 'en'"> <img
                        src="/img/ja.png" alt="" width="30px" v-if="movie.original_language === 'ja'"> <img
                        src="/img/zh.png" alt="" width="25px" v-if="movie.original_language === 'zh'">
                </div>

                <div class="star">
                    <i class="fa fa-star" v-for="star in Math.round(movie.vote_average.toFixed(0) / 2)"></i>
                    <i class="fa-regular fa-star"
                        v-for="starEmpty in 5 - Math.round(movie.vote_average.toFixed(0) / 2)"></i>
                </div>

                <p>Overview: {{ movie.overview }}</p>

                <!-- <div class="buttons">
                    <button @click="showTheCast(movie)">Cast</button>
                    <button @click="genre(movie)">Genres</button>
                </div> -->


                <div class="cast">
                    <ul>
                        <h4 v-if="cast.length != 0"> Cast</h4>
                        <li v-for="actor in cast.slice(0, 5)">Actor: {{ actor.name }} ,
                            character: {{ actor.character }}</li>
                        <h4 v-if="genres.length != 0"> Genres</h4>
                        <li v-for="genMovie in genres" >{{ genMovie.name }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>


</template>

<style></style>