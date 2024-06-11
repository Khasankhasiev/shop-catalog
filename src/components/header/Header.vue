<template>
    <header class="header">
        <HeaderLink class="header__logo">
            <img src="@/assets/images/logo-image.svg" alt="Логотип" />
            Логотип
        </HeaderLink>
        <HeaderLink class="header__item header__catalog">Каталог</HeaderLink>
        <MainInput class="header__input" />

        <div class="header__info-list">
            <HeaderLink>Информация о компании</HeaderLink>
            <HeaderLink>Контакты</HeaderLink>
            <HeaderLink>Полезные ссылки</HeaderLink>
        </div>
    </header>
</template>

<script setup>
import MainInput from '@/components/header/components/MainInput.vue';
import HeaderLink from '@/components/header/components/HeaderLink.vue';
</script>

<style scoped lang="scss">
.header {
    font-family: 'Inter';
    height: 72px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    &__logo {
        display: flex;
        align-items: center;
        gap: 11px;
        margin-right: 8px;
    }

    &__item {
        padding: 15.5px 24px;
    }

    &__catalog {
        border: 1px solid var(--border-color);
        border-radius: 8px;
        margin-right: 23px;
        cursor: pointer;
        &:hover {
            border-color: var(--border-hover);
            color: var(--border-hover);
        }
    }

    &__input {
        width: 50%;
    }

    &__info-list {
        display: flex;
        align-items: center;
        gap: 20px;
        * {
            &:hover {
                color: var(--border-hover);
            }
        }
    }
}
</style>
