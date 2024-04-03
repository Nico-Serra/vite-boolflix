<script>
import { state } from '../state.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <header>
        <h1>
            BoolFlix
        </h1>
        <div>
            <input type="text" v-model="state.userSearchValue">
            <button type="button" @click="$emit('clickOnSearch')">Search</button>
        </div>

    </header>

</template>

<style>
header {
    background-color: black;
    color: red;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center
}
</style>