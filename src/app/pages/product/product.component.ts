import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    //this.updateProduct();
    //this.createProduct();
    //this.deleteProduct();
  }
 getPoducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
      console.log(response)})
 }
 getProduct(){
   this.productHttpService.getOne(2).subscribe(
    response=>{
      console.log(response)})
 }
 createProduct(){
  const data = {
    title: 'Computadora Itel core i7',
    price: 650,
    description: 'Electrodomesticos / Erick Guevara',
    images: [
      'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 updateProduct(){
  const data = {
    title: 'Computadora Itel core i10',
    price: 1150,
    description: 'Electrodomesticos / Erick Guevara',
  };
  this.productHttpService.update(1,data).subscribe(
    response => {
      console.log(response)})
 }
 deleteproduct(){
  this.productHttpService.destroy(4).subscribe(
    response=>{
      console.log(response)})
 }

}
