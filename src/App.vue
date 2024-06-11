<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script setup></script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --accent-200: rgb(115, 175, 244);
    --accent-500: rgb(58, 145, 245);
    --accent-900: rgb(16, 123, 247);
    --accent-950: rgb(1, 92, 197);
    --text-color: rgb(51, 51, 51);
    --stroke-color: rgb(170, 170, 170);
    --button-text-color: rgb(115, 151, 245);
    --background-color: #ffffff;
    --custom-color: rgb(213, 213, 213);
    --border-color: rgb(58, 145, 245);
    --border-hover: rgb(6, 90, 187);
    --category-active: rgb(226, 239, 255);
}

.app {
    font-family: 'PT Sans', sans-serif;
}

li {
    list-style: none;
}
</style>
