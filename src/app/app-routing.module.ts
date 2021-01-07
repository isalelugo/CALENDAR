import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'trabajo',
    loadChildren: () => import('./pages/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  {
    path: 'hogar',
    loadChildren: () => import('./pages/hogar/hogar.module').then( m => m.HogarPageModule)
  },
  {
    path: 'escuela',
    loadChildren: () => import('./pages/escuela/escuela.module').then( m => m.EscuelaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
