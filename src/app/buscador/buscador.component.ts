import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../auth/libros.service';
import { IotFirebaseService } from '../auth/iot-firebase.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  buscar:any;
  data:any;
  constructor(private libros:LibrosService,private houseIoTService: IotFirebaseService) { 
    this.data = [];
  }

  ngOnInit() {
  }
  busqueda(){
    console.log(this.buscar);
    this.libros.getLibros(this.buscar).
    subscribe((res)=>{
      console.log(res.items);
      this.data=res.items;
    })
  }

metodo(){
  console.log(localStorage.getItem('user'))
}
  subir(titulo:any,autor:any,date:any,img:any,id:any){
    this.houseIoTService.insertNew(titulo,autor,date,img,id);
  }

}
