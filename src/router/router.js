import Catalog from '@/pages/catalogPage/CatalogPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Catalog,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

// app.use(router);
export default router;
