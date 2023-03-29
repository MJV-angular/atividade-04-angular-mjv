import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  title: string;
  products: IProducts[] = [];
  delay: number;
  constructor() {
    this.title = 'Produtos';
    this.delay = 0.6;
    this.products = [
      {
        stock: 1,
        title: 'MacBook Air Apple 13.6',
        img: '../../../../../assets/img/products/product1.png',
        price: 8299.99,
        available: true,
        assessment: 5,
      },
      {
        stock: 2,
        title: 'Cadeira Gamer Husky Gaming',
        img: '../../../../../assets/img/products/product2.png',
        price: 1199.99,
        available: true,
        assessment: 4,
      },
      {
        stock: 3,
        title: 'Console Sony Playstation 5',
        img: '../../../../../assets/img/products/product3.png',
        price: 3999.99,
        available: true,
        assessment: 5,
      },
      {
        stock: 4,
        title: 'Monitor Gamer LG',
        img: '../../../../../assets/img/products/product4.png',
        price: 1199.99,
        available: false,
        assessment: 4,
      },

      {
        stock: 4,
        title: 'Placa de Vídeo RTX 3060',
        img: null,
        price: 2499.99,
        available: true,
        assessment: 1,
      },
      {
        stock: 1,
        title: 'MacBook Air Apple 13.6',
        img: '../../../../../assets/img/products/product1.png',
        price: 8299.99,
        available: true,
        assessment: 5,
      },
      {
        stock: 2,
        title: 'Cadeira Gamer Husky Gaming',
        img: '../../../../../assets/img/products/product2.png',
        price: 1199.99,
        available: true,
        assessment: 4,
      },
      {
        stock: 3,
        title: 'Console Sony Playstation 5',
        img: '../../../../../assets/img/products/product3.png',
        price: 3999.99,
        available: true,
        assessment: 5,
      },
      {
        stock: 4,
        title: 'Monitor Gamer LG',
        img: '../../../../../assets/img/products/product4.png',
        price: 1199.99,
        available: false,
        assessment: 4,
      },

      {
        stock: 4,
        title: 'Placa de Vídeo RTX 3060',
        img: null,
        price: 2499.99,
        available: true,
        assessment: 1,
      },
    ];
  }
}

interface IProducts {
  stock: number;
  title: string;
  img: string | null;
  price: number;
  available: boolean;
  assessment: number;
}
