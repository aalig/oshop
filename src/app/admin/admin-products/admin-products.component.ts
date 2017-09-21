import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Rx';
import { ProductService } from '../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
   }

   filter(query: string) {
     this.filteredProducts = (query) ?
       this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) : this.products;
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
