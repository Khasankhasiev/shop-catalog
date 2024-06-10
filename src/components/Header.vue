<template>
    <header class="header">
        <div class="header__item header__logo">
            <img src="@/components/images/logo-image.svg" alt="Логотип" />
            Логотип
        </div>
        <div class="header__item header__catalog">Каталог</div>
        <MainInput class="header__input" />

        <ul class="header__info-list">
            <li class="header__info-item">Информация о компании</li>
            <li class="header__info-item">Контакты</li>
            <li class="header__info-item">Полезные ссылки</li>
        </ul>
    </header>
</template>

<script setup>
import MainInput from '@/components/UI/MainInput.vue';
</script>

<style scoped lang="scss">
.header {
    height: 72px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    padding: 0 15px;
    .header__logo {
        display: flex;
        align-items: center;
        gap: 11px;
        margin-right: 8px;
    }

    .header__item {
        padding: 15.5px 24px;
    }

    .header__catalog {
        border: 1px solid var(--border-color);
        border-radius: 8px;
        margin-right: 23px;
        cursor: pointer;
        &:hover {
            border-color: var(--border-hover);
            color: var(--border-hover);
        }
    }

    .header__input {
        width: 50%;
        margin-right: 24px;
    }

    .header__info-list {
        display: flex;
        align-items: center;
        gap: 20px;
        .header__info-item {
            cursor: pointer;
            &:hover {
                color: var(--border-hover);
            }
        }
    }
}
</style>
