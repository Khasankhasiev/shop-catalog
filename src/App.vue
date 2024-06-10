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
    --button-text-color: rgb(115, 151, 245);
    --background-color: #ffffff;
    --stroke-color: #999999;
    --border-color: rgb(58, 145, 245);
    --border-hover: rgb(6, 90, 187);
    --success: #08a50f80;
    --success-transparent: #08a50f1a;
    --success-light-1: #08a50f;
    --success-light-2: #69d327;
    --danger: #ff0000;
    --warning: #ffb800;
}

.app {
    font-family: 'Inter', sans-serif;
}

li {
    list-style: none;
}
</style>
