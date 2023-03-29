import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  products: IProducts[] = [];
  counter = 0;
  marginValue = 0;

  @ViewChild('slider') slider: ElementRef | undefined;
  @ViewChild('img') img: ElementRef | undefined;

  onButtonClickPrevious(): void {
    clearInterval(this.setTime);
    if (this.counter > 0) {
      this.counter -= 1;
      this.marginValue += this.img?.nativeElement.clientWidth;
    } else {
      this.counter = this.products.length - 1;
      this.marginValue =
        (this.products.length - 1) * -this.img?.nativeElement.clientWidth;
    }
    this.setTime = setInterval(() => {
      this.onButtonClickNext();
    }, 7000);
  }

  onButtonClickNext(): void {
    clearInterval(this.setTime);
    this.next();
    this.setTime = setInterval(() => {
      this.onButtonClickNext();
    }, 7000);
  }

  next(): void {
    if (this.counter < this.products.length - 1) {
      this.counter += 1;
      this.marginValue -= this.img?.nativeElement.clientWidth;
    } else {
      this.counter = 0;
      this.marginValue = 0;
    }
  }

  setTime = setInterval(() => {
    this.onButtonClickNext();
  }, 7000);

  constructor() {
    this.counter = 0;

    this.products = [
      {
        id: 1,
        title: 'MacBook Air Apple 13.6',
        img: '../../../../../assets/img/products/product1.png',
        price: 8299.99,
      },
      {
        id: 2,
        title: 'Cadeira Gamer Husky Gaming',
        img: '../../../../../assets/img/products/product2.png',
        price: 1199.99,
      },
      {
        id: 3,
        title: 'Console Sony Playstation 5',
        img: '../../../../../assets/img/products/product3.png',
        price: 3999.99,
      },
      {
        id: 4,
        title: 'Monitor Gamer LG',
        img: '../../../../../assets/img/products/product4.png',
        price: 1199.99,
      },
    ];
  }
}
interface IProducts {
  id: number;
  title: string;
  img: string;
  price: number;
}
