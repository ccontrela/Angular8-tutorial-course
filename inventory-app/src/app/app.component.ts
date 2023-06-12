import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MyShoes',
        'black running  shoes',
        '/assets/images/products/black-shoes.jpg', 
        ['Men', 'shoes', 'running shoes'], 109.99),
      new Product(
        'netojacket',
        'blue jackeT',
        '/assets/images/products/black-hat.jpg', 
        ['women', 'Apparel', 'jackets & vests'], 238.99),
      new Product(
        'nicehat',
        'a nice black haat',
        'assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'], 29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);    
  }
}
