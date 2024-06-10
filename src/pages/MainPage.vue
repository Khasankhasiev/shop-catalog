<template>
    <div class="container">
        <Header></Header>
        <h1>Добро пожаловать</h1>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style scoped lang="scss">
.container {
    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
}

@media (min-width: 1750px) {
    .container {
        max-width: 1500px;
    }
}
</style>
