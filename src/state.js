import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    movies: [],
    series: [],
    userSearchValue: '',
    movieApi: 'https://api.themoviedb.org/3/search/movie?api_key=3d400e0ed0f9cd54b51de374af445077&query=',
      serieApi: 'https://api.themoviedb.org/3/search/tv?api_key=3d400e0ed0f9cd54b51de374af445077&query=',
    

    addMovie(url){
        axios.get(url).then((response) => state.movies = response.data.results)
    },
    addSerie(url){
        axios.get(url).then((response) => state.series = response.data.results)
    }
})


