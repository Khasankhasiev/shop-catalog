<template>
    <header class="header">
        <HeaderLink class="header__logo">
            <img src="@/assets/images/logo-image.svg" alt="Логотип" />
            Логотип
        </HeaderLink>
        <HeaderLink
            class="header__item header__catalog"
            :class="{ 'header-active': isActive('/catalog') }"
            @click="$router.push('/catalog')"
            >Каталог</HeaderLink
        >
        <MainInput class="header__input" />

        <div class="header__info-list">
            <HeaderLink
                :class="{ 'header-active': isActive('/company') }"
                @click="$router.push('/company')"
                >Информация о компании</HeaderLink
            >
            <HeaderLink>Контакты</HeaderLink>
            <HeaderLink>Полезные ссылки</HeaderLink>
        </div>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import MainInput from '@/components/header/components/HeaderInput.vue';
import HeaderLink from '@/components/header/components/HeaderLink.vue';

const route = useRoute();

const isActive = path => {
    return route.path === path;
};
</script>

<style scoped lang="scss">
.header-active {
    border: 1px solid var(--border-color);
    border-radius: 8px;
}

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
        margin-right: 23px;
        cursor: pointer;
        transition: border-color 0.3s ease, transform 0.1s ease, color 0.3s ease,
            box-shadow 0.1s ease;
        &:hover {
            border-color: var(--border-hover);
            color: var(--border-hover);
        }
        &:active {
            transform: translateY(0px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
    }

    &__input {
        width: 50%;
    }

    &__info-list {
        margin-left: 23px;
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
