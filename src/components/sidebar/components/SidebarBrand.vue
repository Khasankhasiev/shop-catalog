<template>
    <div class="sidebar__brand">
        <div class="sidebar__brand-header">
            <p class="header">Бренд</p>
            <p class="stroke-btn">Очистить</p>
        </div>
        <div class="sidebar__brand-input">
            <CustomInput class="input" placeholder="Поиск" />
            <div class="sidebar__brand-input-placeholder"></div>
        </div>
        <ul class="sidebar__brand-attribute-list">
            <li class="sidebar__brand-attribute-item">
                <Checkbox id="1" label="Атрибут" />
                <div class="sidebar__brand-attribute-count">3</div>
            </li>
            <li class="sidebar__brand-attribute-item">
                <Checkbox id="2" label="Атрибут" />
                <div class="sidebar__brand-attribute-count">3</div>
            </li>
            <li class="sidebar__brand-attribute-item">
                <Checkbox id="3" label="Атрибут" />
                <div class="sidebar__brand-attribute-count">3</div>
            </li>
            <li class="sidebar__brand-attribute-item">
                <Checkbox id="4" label="Атрибут" />
                <div class="sidebar__brand-attribute-count">3</div>
            </li>
            <li class="sidebar__brand-attribute-item">
                <Checkbox id="5" label="Атрибут" />
                <div class="sidebar__brand-attribute-count">3</div>
            </li>
            <li class="sidebar__brand-attribute-item">
                <Checkbox id="6" label="Атрибут" />
                <div class="sidebar__brand-attribute-count">3</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import Checkbox from './SidebarCheckbox.vue';
import CustomInput from './CustomInput.vue';
</script>

<style lang="scss" scoped>
.sidebar__brand {
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header {
            font-size: 16px;
            font-weight: 700;
        }
        .stroke-btn {
            color: var(--stroke-color);
            text-decoration: underline;
            cursor: pointer;
            &:hover {
                color: rgb(75, 74, 74);
            }
        }
    }
    &-input {
        margin-top: 16px;
        position: relative;
        .input {
            padding-left: 36px;
        }

        &-placeholder {
            position: absolute;
            top: 12px;
            left: 12px;

            width: 16px;
            height: 16px;
            background-image: url('@/assets/images/loop.svg');
            background-repeat: no-repeat;
            background-size: 16px 16px; /* размер изображения */
            background-position: left center; /* позиция изображения */
            padding-left: 24px;
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
