import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    movies: [],
    

    addElement(url){
        axios.get(url).then((response) => state.movies = response.data.results)
    }
})


