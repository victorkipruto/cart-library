import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
  selector: 'lib-cart-library',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl:"./cart-library.component.html" ,
  styles: ``
})
export class CartLibraryComponent {

}
