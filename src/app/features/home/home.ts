import { Component } from '@angular/core';
import { ProductCard } from "../../shared/product-card/product-card";

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
