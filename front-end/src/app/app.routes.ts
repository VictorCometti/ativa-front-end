import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/product-page/category-page.component';

export const routes: Routes = [

    {
        path: '',
        component: HomePageComponent,
        data: { scrollPositionRestoration: 'enabled' }
    },
    {
        path: 'product_category/:category',
        component: CategoryPageComponent,
        data: { scrollPositionRestoration: 'enabled' }
    },
];
