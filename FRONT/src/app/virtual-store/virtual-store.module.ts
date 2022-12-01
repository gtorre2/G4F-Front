import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ApiProductModule } from "../api/api-product.module";
import { CustomTableModule } from "../component/custom-table/custom-table.module";
import { AppMaterialModule } from "../modules/app-material.module";
import { CustomDialogModule } from "../modules/custom-dialog/custom-dialog.module";
import { FormValidatorModule } from "../modules/form-validator/form-validator.module";
import { SnackbarModule } from "../modules/snackbar/snackbar.module";
import { MdDialogService } from "../util/md-dialog.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductService } from "./product.service";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductNewComponent } from "./product/product-new/product-new.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule,
    CurrencyMaskModule,
    FormValidatorModule,
    SnackbarModule,
    CustomDialogModule,
    CustomTableModule,
    ApiProductModule
  ],
  declarations: [
    ProductListComponent,
    DashboardComponent,
    ProductNewComponent
  ],
  exports: [
    ProductListComponent,
    DashboardComponent,
    ProductNewComponent
  ],
  entryComponents: [
    ProductNewComponent
  ],
  providers: [
    ProductService,
    MdDialogService
  ]
})

export class VirtualStoreModule {}
