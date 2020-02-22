import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  data:any;
  constructor(private http:HttpClient) { }
  proxy = 'https://cors-anywhere.herokuapp.com/';
  getLibros(nombre:any) : any{
    
    this.data = this.http.get(`${this.proxy}https://www.googleapis.com/books/v1/volumes?q=${nombre}`);
    console.log(this.data)
    return this.data;
    }

 
}
