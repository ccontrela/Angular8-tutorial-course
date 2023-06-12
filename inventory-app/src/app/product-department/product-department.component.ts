import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  @Input() product: Product

  constructor() {
    this.product = new Product(
      'MyShoes',
      'black running  shoes',
      '/assets/images/products/black-shoes.jpg', 
      ['Men', 'shoes', 'running shoes'], 109.99);
  }
}
