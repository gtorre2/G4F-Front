import { Component, OnInit } from "@angular/core";
import { storeRoutes } from "src/app/store-routes.const";
import { MdDialogService } from "src/app/util/md-dialog.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public routes = storeRoutes;

  constructor(
    private dialog: MdDialogService
  ) { }

  ngOnInit() {
  }

  public newProduct(): void {
    this.dialog.newProduct();
  }
}
