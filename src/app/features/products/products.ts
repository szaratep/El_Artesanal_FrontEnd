import { Component } from '@angular/core';
import { ProductCard } from "../../shared/product-card/product-card";

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {}
