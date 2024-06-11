<template>
    <div class="container">
        <Header></Header>
        <div class="content">
            <Sidebar class="sidebar"></Sidebar>
            <main class="main">
                <CatalogCard class="main__card">Карточка 1</CatalogCard>
                <CatalogCard class="main__card">Карточка 2</CatalogCard>
                <CatalogCard class="main__card">Карточка 3</CatalogCard>
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
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
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
    margin-top: 24px;
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

.container {
    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
}

@media (max-width: 1750px) {
    .container {
        max-width: 1600px;
    }
}
</style>
