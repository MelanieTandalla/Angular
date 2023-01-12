import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  getProducts() {
    const response = this.httpClient
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((response) => {
        console.log(response);
      });
  }
  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const response = this.httpClient.get(url).subscribe((response) => {
      console.log(response);
    });
  }

  constructor(private httpClient: HttpClient) {}
  createProduct() {
    const data = {
      title: 'Computadora Itel core i7',
      price: 650,
      description: 'Electrodomesticos / Erick Guevara',
      images: [
        'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
      ],
      categoryId: 1,
    };
    const url = 'https://api.escuelajs.co/api/v1/products';
    const response = this.httpClient.post(url, data).subscribe((response) => {
      console.log(response);
    });
  }
  updateProduct() {
    const data = {
      title: 'Computadora Itel core i10',
      price: 1150,
      description: 'Electrodomesticos / Erick Guevara',
    };
    const url = 'https://api.escuelajs.co/api/v1/products/279';
    this.httpClient.put(url, data).subscribe((response) => {
      console.log(response);
    });
  }
  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/260';
    this.httpClient.delete(url).subscribe((response) => {
      console.log(response);
    });
  }
}


