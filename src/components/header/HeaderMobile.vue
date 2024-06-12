<template>
    <div class="header-mobile__wrapper">
        <div class="header-mobile">
            <button class="header-mobile__button-back">
                <img
                    class="button-back"
                    src="@/assets/images/arrow.svg"
                    alt="Назад"
                />
            </button>

            <div class="header-mobile__input-wrapper">
                <input class="header-mobile__input" type="text" />
                <button class="header-mobile__button-clear">
                    <img src="@/assets/images/clear.svg" alt="Очистить" />
                </button>
                <button class="header-mobile__search-button">Найти</button>
            </div>
        </div>

        <div class="category">Название категории</div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
button,
input {
    outline: none;
    border: none;
}
button {
    cursor: pointer;
}

.header-mobile {
    display: flex;
    height: 45px;
    align-items: center;
    gap: 16px;
    &__button-back {
        background: transparent;
        width: 20px;
    }
    &__input-wrapper {
        border-bottom: 1px solid rgb(213, 213, 213);
        display: flex;
        align-items: center;
        gap: 13px;
        padding-bottom: 6px;
        padding-top: 8px;
        width: 100%;
    }
    &__input {
        width: 100%;
        height: 38px;
        font-size: 14px;
    }
    &__button-clear {
        background: transparent;
    }
    &__search-button {
        background-color: var(--button-text-color);
        color: var(--background-color);
        padding: 12px 16px;
        border-radius: 5px;
    }
}

.category {
    font-size: 22px;
    font-weight: 400;
    margin-top: 12px;
}
</style>
