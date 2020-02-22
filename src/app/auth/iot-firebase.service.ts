import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotFirebaseService {
user: any;
uid : any;
  constructor(private houseIoT: AngularFireDatabase) { 
    this.user =  localStorage.getItem('user');
    this.uid = JSON.parse(this.user).uid;
  }

  insertNew(titulo: any, autor: any, date: any, img: any, id: any) {
    this.houseIoT.object(`/busqueda/${this.uid}/libros/${id}`).set({ titulo: titulo, autor: autor, date: date, img: img, id: id });
  }
  
  list(): Observable<any> {
    
    return this.houseIoT.list(`/busqueda/${this.uid}/libros`).valueChanges();
  }
}
