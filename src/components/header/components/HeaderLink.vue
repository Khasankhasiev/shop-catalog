<template>
    <div class="header__item">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header__item {
    cursor: pointer;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
}
</style>
