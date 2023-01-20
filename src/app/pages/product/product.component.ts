import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductModelDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  selectedProduct: UpdateProductModelDto={}

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.updateProduct();
    this.createProduct();
    this.deleteProduct();
  }
 getProducts(){
   this.productHttpService.getAll().subscribe(
    response=>{
       this.products= response
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
    description: 'Laptops / Melanie Tandalla',
    images: [
      'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
    ],
    categoryId: 1,
  };
  this.productHttpService.store(data).subscribe(
    response=>{
      console.log(response)})
 }
 editProduct(product: ProductModel){
  this.selectedProduct = product
 }
 updateProduct(){
  const data = {
    title: 'Computadora Itel core i10',
    price: 1150,
    description: 'Laptops / Melanie Tandalla',
  };
  this.productHttpService.update(1,data).subscribe(
    response => {
      console.log(response)})
 }
 deleteProduct(){
  this.productHttpService.destroy(1).subscribe(
    response => {
      //this.products= this.products.filter(product => product.id != id)
      console.log(response)})
 }

}
