import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent {
  @Input() price: number;

  constructor() {
    this.price = 0;
  }
}
