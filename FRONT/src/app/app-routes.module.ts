import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { storeRoutes } from "./store-routes.const";
import { DashboardComponent } from "./virtual-store/dashboard/dashboard.component";
import { ProductListComponent } from "./virtual-store/product/product-list/product-list.component";
import { ProductNewComponent } from "./virtual-store/product/product-new/product-new.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: storeRoutes.home,
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: storeRoutes.productList,
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: storeRoutes.productNew,
    component: ProductNewComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AppComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
/**
 * @module AppRoutesModule
 * @desc Modulo que importa os componentes de angular material
 */
export class AppRoutesModule { }
