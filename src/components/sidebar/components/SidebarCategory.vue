<template>
    <div :class="'sidebar__category'">
        <div
            :class="['sidebar__category-info', { 'category-active': isActive }]"
        >
            <div class="sidebar__category-name">Название категории</div>
            <div class="sidebar__category-count">3</div>
        </div>
        <div class="sidebar__category-child"><slot></slot></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isActive: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.sidebar__category {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &-info {
        display: flex;
        justify-content: space-between;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 16px;
        padding-right: 16px;
        &:hover {
            background: var(--category-active);
        }
        &-name {
            cursor: pointer;
        }

        &-count {
            color: var(--stroke-color);
        }
    }

    &-child {
        padding-left: 16px;
    }
}

.category-active {
    border-radius: 5px;
    background: var(--category-active);
}
</style>
