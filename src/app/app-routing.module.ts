import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', pathMatch: 'full', component: LoginComponent },

  { path: 'error', pathMatch: 'full', component: ErrorComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then((m) => m.FeedbackModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
