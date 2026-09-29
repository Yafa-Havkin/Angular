import { Routes } from '@angular/router';
import { KabalosList } from './components/kabalos-list/kabalos-list';
import { Kabalos } from './components/kabalos/kabalos';
import { Home } from './components/home/home';


export const routes: Routes = [
   { path:'list', component: KabalosList},
   { path: 'edit', component: Kabalos},
   {path: '', component: Home, pathMatch: 'full'},
   {path: 'home', component: Home}
];
