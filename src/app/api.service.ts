import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductsByCategories(category:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)

  }
  getProductById(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
