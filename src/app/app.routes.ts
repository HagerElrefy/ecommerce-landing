import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'categories', component: CategoriesComponent },
    {
        path: '**', component: NotFoundComponent
    }

];
