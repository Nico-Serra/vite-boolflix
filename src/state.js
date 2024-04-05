import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    movies: [],
    series: [],
    userSearchValue: '',
    category: '',
    listGenres: [],
    cast: [],
    genres: [],


    movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=3d400e0ed0f9cd54b51de374af445077&query=',
    serieApi: 'https://api.themoviedb.org/3/search/tv?api_key=3d400e0ed0f9cd54b51de374af445077&query=',


    addMovie(url) {
        axios.get(url).then((response) => state.movies = response.data.results)
    },
    addSerie(url) {
        axios.get(url).then((response) => state.series = response.data.results)
    },

    addListGenre() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3d400e0ed0f9cd54b51de374af445077').then(resp => state.listGenres = resp.data.genres)
    },

    /*showTheCast(movie) {
        
        const movieID = movie.id;
        const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=3d400e0ed0f9cd54b51de374af445077`
        axios.get(url).then(resp => this.cast = resp.data.cast)
    },
    genre(movie) {
        const movieID = movie.id;
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=3d400e0ed0f9cd54b51de374af445077`).then(resp => this.genres = resp.data.genres)
    }*/
})


