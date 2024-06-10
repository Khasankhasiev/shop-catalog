<template>
    <input
        class="input"
        id="input"
        type="text"
        placeholder="Поиск по 100 000 товаров"
    />
</template>

<script setup></script>

<style scoped lang="scss">
.input {
    width: 100%;
    padding: 15px 16px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    outline: none;
    &:focus,
    &:active {
        border-color: var(--border-hover);
    }
    &::placeholder {
        background-image: url('@/components/images/loop.svg');
        background-repeat: no-repeat;
        background-size: 16px 16px; /* размер изображения */
        background-position: left center; /* позиция изображения */
        padding-left: 24px;
    }
}
</style>
