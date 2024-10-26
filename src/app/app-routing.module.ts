import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', 
    redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/Acceso/Register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Acceso/Login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/Page-Main/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/Acceso/Recuperar-Pass/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },  {
    path: 'page-error',
    loadChildren: () => import('./pages/Error/page-error/page-error.module').then( m => m.PageErrorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
