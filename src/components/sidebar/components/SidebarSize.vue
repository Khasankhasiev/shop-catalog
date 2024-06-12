<template>
    <div class="sidebar__size">
        <div class="sidebar__size-header">
            <p class="header">Размер</p>
        </div>
        <ul class="sidebar__size-attribute-list">
            <li class="sidebar__size-attribute-item">
                <Checkbox id="7" label="Атрибут" />
                <div class="sidebar__size-attribute-count">3</div>
            </li>
            <li class="sidebar__size-attribute-item">
                <Checkbox id="8" label="Атрибут" />
                <div class="sidebar__size-attribute-count">3</div>
            </li>
            <li class="sidebar__size-attribute-item">
                <Checkbox id="9" label="Атрибут" />
                <div class="sidebar__size-attribute-count">3</div>
            </li>
            <li class="sidebar__size-attribute-item">
                <Checkbox id="10" label="Атрибут" />
                <div class="sidebar__size-attribute-count">3</div>
            </li>
            <li class="sidebar__size-attribute-item">
                <Checkbox id="11" label="Атрибут" />
                <div class="sidebar__size-attribute-count">3</div>
            </li>
            <li class="sidebar__size-attribute-item">
                <Checkbox id="12" label="Атрибут" />
                <div class="sidebar__size-attribute-count">3</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import Checkbox from './SidebarCheckbox.vue';
</script>

<style lang="scss" scoped>
.sidebar__size {
    padding-bottom: 20px;
    &-header {
        display: flex;
        justify-content: center;
        align-items: center;

        .header {
            font-size: 16px;
            font-weight: 700;
        }
    }
    &-attribute-list {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 180px;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 3px; /* ширина скроллбара */
        }

        /* Полоса прокрутки */
        &::-webkit-scrollbar-track {
            background: #fff; /* цвет фона полосы прокрутки */
            border-radius: 10px; /* скругление углов полосы прокрутки */
        }

        /* Ползунок/бегунок прокрутки */
        &::-webkit-scrollbar-thumb {
            background: rgb(203, 203, 203); /* цвет бегунка */
            border-radius: 10px; /* скругление углов бегунка */
        }

        /* При наведении на бегунок */
        &::-webkit-scrollbar-thumb:hover {
            background: rgb(228, 204, 204); /* цвет бегунка при наведении */
        }
    }
    &-attribute-item {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }

    &-attribute-count {
        color: var(--stroke-color);
        font-size: 12px;
        margin-right: 13px;
    }
}
</style>
