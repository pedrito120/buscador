import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  isLoggedIn = false;
  redirectUrl: string;
  token:any
  constructor(private authService: AngularFireAuth, private router: Router) {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null)
      }
    })
  }
  
  registrarUsuario(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    })
  }
  async loginFirebase(email: any, password: any) {
    try {
      await this.authService.auth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      this.router.navigate(['/buscador']);
    } catch (e) {
      alert(e.messagge)
    }
  }
  async logOutFirebase() {
    try {
      await this.authService.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login'])
    } catch (e) {
      alert(e.messagge)
    }
  }
}
