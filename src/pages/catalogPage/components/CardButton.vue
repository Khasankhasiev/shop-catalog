<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn {
    padding: 10px 15px;
    background: none;
    border: 1px solid var(--button-text-color);
    cursor: pointer;
    color: rgb(115, 151, 245);
    font-size: 14px;
    &:hover {
        border-color: var(--border-hover);
        color: var(--border-hover);
    }
}
</style>
