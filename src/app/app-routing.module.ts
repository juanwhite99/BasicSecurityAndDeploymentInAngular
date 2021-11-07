import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full"},
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
