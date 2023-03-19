<script setup>
defineProps({
    msg: {
        type: String,
        required: true,
    },
});
</script>

<template>
<div class="container">
    <h1>FYND ACADEMY {{ msg }}</h1>
    <h2>
        You've successfully login to fynd academy
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>+
        <a href="https://vuejs.org/" target="_blacnk" rel="noopener">Vue 3</a>.
    </h2>
</div>
</template>

<style>

.container{
    text-align: center;
}

h1 {
    font-weight: 500;
    font-size: 2rem;
    margin-top: 2rem;
}

h2{
    font-size: 1rem;
    color: aqua;

}
</style>
