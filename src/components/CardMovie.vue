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

            <div class="card_image">
                <img :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" alt="">
            </div>

            <div class="info">
                <h2>FILM</h2>
                <h3>Title: {{ movie.title }} </h3>
                <h3 v-if="movie.title != movie.original_title ">Original Title: {{ movie.original_title }} </h3>

                <div class="flag">
                    <span>Language:  </span>
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
            </div>

        </div>
    </div>


</template>

<style></style>