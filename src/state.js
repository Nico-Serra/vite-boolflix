import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    movies: [],
    series: [],
    

    addMovie(url){
        axios.get(url).then((response) => state.movies = response.data.results)
    },
    addSerie(url){
        axios.get(url).then((response) => state.series = response.data.results)
    }
})


