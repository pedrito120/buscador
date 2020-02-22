import { Component, OnInit } from '@angular/core';
import { IotFirebaseService } from '../auth/iot-firebase.service';

@Component({
  selector: 'app-preferencia',
  templateUrl: './preferencia.component.html',
  styleUrls: ['./preferencia.component.css']
})
export class PreferenciaComponent implements OnInit {
data:any;
  constructor(private houseIoTService: IotFirebaseService) {
    this.houseIoTService.list().
    subscribe((res)=>{
      this.data=res;
    })
   }

  ngOnInit() {

  }

}
