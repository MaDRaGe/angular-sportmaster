import { Injectable } from '@angular/core';
import faker from 'faker';

export interface IProduct {
  imageUrl: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  getProductList(productCount): IProduct[] {
    const productList: IProduct[] = [];
    for (let i = 0; i < productCount; i++) {
      productList.push({
        imageUrl: faker.image.sports(),
        name: faker.name.title()
      })
    }
    return productList;
  }
}
