import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductListService, IProduct } from '../product-list.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass'],
  providers: [ProductListService]
})
export class CatalogComponent implements OnInit {

  productList: IProduct[] = [];

  constructor(
    private router: Router,
    private productListService: ProductListService
  ) { }

  ngOnInit(): void {
    this.productList = this.productListService.getProductList(10)
  }

}
