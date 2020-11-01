import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  slideCount = 3;
  currentSlide = 1;

  constructor() { }

  ngOnInit(): void {
    this.nextSlide();
  }

  nextSlide() {
    setTimeout(() => {
      this.currentSlide += 1;
      if (this.currentSlide > this.slideCount) {
        this.currentSlide = 1;
      }
      this.nextSlide()
    }, 5000)
  }
}
