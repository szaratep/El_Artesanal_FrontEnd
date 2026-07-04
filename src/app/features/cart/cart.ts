import { Component } from '@angular/core';
import { CartItem } from "../../shared/cart-item/cart-item";

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export default class Cart {}
