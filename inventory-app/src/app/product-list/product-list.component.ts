import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productlist: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor(){
    this.productlist = [];
    this.currentProduct = new Product(
      'MyShoes',
      'black running  shoes',
      '/assets/images/products/black-shoes.jpg', 
      ['Men', 'shoes', 'running shoes'], 109.99);

    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
