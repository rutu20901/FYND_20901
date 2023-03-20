<script setup>
defineProps({
    msg:{
        type:String,
        required:true,
    },
});
</script>

<template>
    <div class="container">
        <h3>{{ msg }}</h3>
        <h2>Services</h2>
        <div>
            <h3>Web developement</h3>
            <h3>Digital Marketing</h3>
            <h3>UI/UX Design</h3>
            <h3>Training</h3>
        </div>

    </div>
</template>