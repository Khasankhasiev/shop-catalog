<template>
    <div class="sidebar__price">
        <div class="sidebar__price-header">
            <p>Цена</p>
        </div>

        <div class="sidebar__price-inputs">
            <div class="sidebar__price-input">
                <CustomInput class="input" />
                <span class="sidebar__price-input-placeholder">от</span>
            </div>
            <div class="sidebar__price-separator"></div>
            <div class="sidebar__price-input">
                <CustomInput class="input" />
                <span class="sidebar__price-input-placeholder">до</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomInput from './CustomInput.vue';
</script>

<style lang="scss" scoped>
.sidebar__price {
    &-header {
        text-align: center;
        font-size: 16px;
        font-weight: 700;
    }
    &-inputs {
        margin-top: 16px;
        display: flex;
        align-items: center;
    }
    &-separator {
        width: 10px;
        height: 1px;
        background-color: #000;
        margin: 0 16px;
    }
    &-input {
        position: relative;
        display: flex;
        align-items: center;
        .input {
            padding-left: 30px;
            font-size: 14px;
            max-width: 120px;
        }
        &-placeholder {
            position: absolute;
            left: 8px;
            top: 7px;
            pointer-events: none;
            color: #aaa;
        }
    }
}
</style>
