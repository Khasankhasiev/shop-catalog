<template>
    <div class="container">
        <Header class="header"></Header>
        <HeaderMobile class="header-mobile__wrapper" />
        <div class="content">
            <Sidebar class="sidebar"></Sidebar>
            <main class="main">
                <CatalogCard class="main__card">Карточка 1</CatalogCard>
                <CatalogCard class="main__card">Карточка 2</CatalogCard>
                <CatalogCard :activeBtn="activeBtn" class="main__card"
                    >Карточка 3</CatalogCard
                >
                <CatalogCard class="main__card">Карточка 4</CatalogCard>
                <CatalogCard class="main__card">Карточка 5</CatalogCard>
                <CatalogCard class="main__card">Карточка 6</CatalogCard>
                <CatalogCard class="main__card">Карточка 7</CatalogCard>
                <CatalogCard class="main__card">Карточка 8</CatalogCard>
                <CatalogCard class="main__card">Карточка 9</CatalogCard>
                <CatalogCard class="main__card">Карточка 10</CatalogCard>
                <CatalogCard class="main__card">Карточка 11</CatalogCard>
                <CatalogCard class="main__card">Карточка 12</CatalogCard>
            </main>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
import CatalogCard from './components/CatalogCard';
import HeaderMobile from '@/components/header/HeaderMobile.vue';
import { ref } from 'vue';

const activeBtn = ref(true);
</script>

<style scoped lang="scss">
.header-mobile__wrapper {
    display: none;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
}

.header {
    width: 100%;
    height: 72px;
    padding: 20px;
}

.content {
    display: flex;
    flex: 1;
}

.sidebar {
    flex: 0 0 320px;
    padding-top: 24px;
    padding-right: 18px;
}

.main {
    flex: 1;
    padding: 24px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
@media (max-width: 1200px) {
    .main {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .main {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 1750px) {
    .container {
        max-width: 1550px;
    }
}

@media (max-width: 1600px) {
    .container {
        max-width: 1400px;
    }
}

@media (max-width: 1400px) {
    .container {
        max-width: 1200px;
    }
}

@media (max-width: 1200px) {
    .container {
        max-width: 900px;
    }
}

@media (max-width: 940px) {
    .container {
        max-width: 500px;
    }

    .sidebar {
        display: none;
    }

    .header {
        display: none;
    }

    .main {
        padding: 12px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px; /* Отступы между карточками */
    }

    .header-mobile__wrapper {
        display: block;
    }
}

@media (max-width: 500px) {
    .container {
        max-width: 343px;
    }
}
</style>
