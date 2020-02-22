import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router, private afAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  async logOutFirebase(){
    try{
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login'])
    }catch(e){
      alert(e.messagge)
    }
  }
}
