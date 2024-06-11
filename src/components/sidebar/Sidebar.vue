<template>
    <div class="sidebar">
        <SidebarCategories />
        <SidebarPrice />
        <SidebarBrand />
        <SidebarSize />
    </div>
</template>

<script setup>
import SidebarCategories from './components/SidebarCategories.vue';
import SidebarPrice from './components/SidebarPrice.vue';
import SidebarBrand from './components/SidebarBrand.vue';
import SidebarSize from './components/SidebarSize.vue';
</script>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 28px;
}
</style>
