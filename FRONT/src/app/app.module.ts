import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AppRoutesModule } from "./app-routes.module";
import { AppComponent } from "./app.component";
import { PaginationModule } from "./component/pagination/pagination.module";
import { ContainerModule } from "./container/container.module";
import { AppMaterialModule } from "./modules/app-material.module";
import { CustomDialogModule } from "./modules/custom-dialog/custom-dialog.module";
import { SnackbarModule } from "./modules/snackbar/snackbar.module";
import { VirtualStoreModule } from "./virtual-store/virtual-store.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutesModule,
    ContainerModule,
    AppMaterialModule,
    VirtualStoreModule,
    PaginationModule,
    SnackbarModule,
    CurrencyMaskModule,
    CustomDialogModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
