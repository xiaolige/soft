import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Array<Product>;
  public imgUrl = 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '一个商品', 1.99, 3.5, '则是第一个商品' , [ '电子产品', '硬件设备']),
      new Product(2, '二个商品', 2.99, 2.5, '则是第二个商品' , [  '硬件设备']),
      new Product(3, '三个商品', 3.99, 1.5, '则是第三个商品' , [ '图书']),
      new Product(4, '四商品',   4.99, 3,   '则是第四个商品', [ '电子产品', '硬件设备']),
      new Product(5, '五个商品', 5.99, 4,   '则是第五个商品', [ '电子产品']),
      new Product(6, '六个商品', 6.99, 5,   '则是第六个商品', [  '图书'])

    ];
  }

}
export class Product {
  constructor(
    public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public desc: string,
      public categories: Array<string>
  ) {

  }
}
