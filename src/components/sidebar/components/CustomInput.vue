<template>
    <input class="input" type="text" v-model="inputValue" />
</template>

<script setup>
import { ref } from 'vue';

// Создаем реактивную переменную для хранения значения инпута
const inputValue = ref('');
</script>

<style scoped lang="scss">
.input {
    border-radius: 4px;
    background: rgb(255, 255, 255);
    border: 1px solid var(--custom-color);
    outline: none;
    width: 100%;
    padding: 10px 12px;
    &:focus,
    &:active {
        border-color: var(--text-color);
    }
}
</style>
