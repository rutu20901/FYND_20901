<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld1.vue'
</script>

<template>
    <header>

        <div class="wrapper">
            <br>
            <nav>
                <RouterLink to = "/">Home</RouterLink>
                <RouterLink to = "/">About</RouterLink>
                <RouterLink to = "/">Test</RouterLink>
                <RouterLink to = "/">Login</RouterLink>
                <RouterLink to = "/">AboutYou</RouterLink>
                <RouterLink to = "/">Products</RouterLink>
            </nav>
        </div>
    </header>

    
</template>
<style scoped>
header{
    font-family: 'Courier New', Courier, monospace;
}
</style>