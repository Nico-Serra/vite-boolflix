<script>
export default {
    name: 'CardMovie',
    data() {
        return {

        }
    },
    props: {
        movie: Object,
    }
}
</script>

<template>
    <div class="col">
        <div class="card">

            <img :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" alt="">
            <div class="info" v-if="false">
                <h2>FILM</h2>
                {{ movie.title }} , {{ movie.original_title }} ,
                <i :class="'fi fi-' + movie.original_language"
                    v-if="movie.original_language != 'en' && movie.original_language != 'ja' && movie.original_language != 'zh'"></i>

                <img src="/img/en.png" alt="" width="30px" v-if="movie.original_language === 'en'"> <img
                    src="/img/ja.png" alt="" width="30px" v-if="movie.original_language === 'ja'"> <img
                    src="/img/zh.png" alt="" width="25px" v-if="movie.original_language === 'zh'">,
                <i class="fa fa-star" v-for="star in Math.round(movie.vote_average.toFixed(0) / 2)"></i>
                <i class="fa-regular fa-star"
                    v-for="starEmpty in 5 - Math.round(movie.vote_average.toFixed(0) / 2)"></i>
            </div>

        </div>
    </div>


</template>

<style></style>