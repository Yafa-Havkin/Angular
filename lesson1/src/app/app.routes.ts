import { Routes } from '@angular/router';
import { KabalosList } from './components/kabalos-list/kabalos-list';
import { Kabalos } from './components/kabalos/kabalos';
import { Home } from './components/home/home';


export const routes: Routes = [
   { path:'list', component: KabalosList, children:[
    {path: 'edit/:id', component: Kabalos},
    {path:'', redirectTo:'edit/11', pathMatch: 'prefix'}
   ]},
   { path: 'add', component: Kabalos},
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: Home}
];
