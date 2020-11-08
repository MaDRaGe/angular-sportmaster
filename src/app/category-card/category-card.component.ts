import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.sass']
})
export class CategoryCardComponent implements OnInit {
  @Input() title: string = "Jackets";
  @Input() imageUrl: string = "https://cdn2.sptmr.ru/upload/resize_cache/iblock/3b7/170_180_1/xoshqh.JPG";

  constructor() { }

  ngOnInit(): void {
  }

  

}
