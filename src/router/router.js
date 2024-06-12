import Catalog from '@/pages/catalogPage/CatalogPage';
import Company from '@/pages/companyPage/CompanyPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/catalog', // Добавлен редирект с корневого пути
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
    },
    // Добавьте другие маршруты здесь
    {
        path: '/company',
        name: 'company',
        component: Company,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
