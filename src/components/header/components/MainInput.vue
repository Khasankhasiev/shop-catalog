<template>
    <div class="input-wrapper">
        <input
            class="input"
            id="input"
            type="text"
            placeholder="Поиск по 100 000 товаров"
        />
        <div class="input-placeholder"></div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.input-wrapper {
    position: relative;
    .input {
        width: 100%;
        padding: 15px 16px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        outline: none;
        padding-left: 48px;
        &:focus,
        &:active {
            border-color: var(--border-hover);
        }
    }
    .input-placeholder {
        width: 16px;
        height: 16px;
        position: absolute;
        background-image: url('@/assets/images/loop.svg');
        background-repeat: no-repeat;
        background-size: 16px 16px;
        padding-left: 20px;
        top: 15px;
        left: 14px;
        pointer-events: none;
    }
}
</style>
