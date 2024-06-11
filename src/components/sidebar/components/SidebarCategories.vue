<template>
    <div class="sidebar__category">
        <SidebarCategory>
            <SidebarCategory></SidebarCategory>
            <SidebarCategory></SidebarCategory>
            <SidebarCategory :is-active="activeCategory"> </SidebarCategory>
        </SidebarCategory>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarCategory from './SidebarCategory.vue';
let activeCategory = ref(true);
</script>

<style lang="scss" scoped></style>
