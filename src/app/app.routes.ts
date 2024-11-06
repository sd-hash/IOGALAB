import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: "main", loadComponent: () => import("./main/main.page").then(m => m.MainPage)},
  { path: "tabs", loadComponent: () => import("./tabs/tabs.page").then(m => m.TabsPage)},
  {
    path: 'reserva',
    loadComponent: () => import('./reserva/reserva.page').then( m => m.ReservaPage)
  }
];
