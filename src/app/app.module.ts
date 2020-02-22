import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PreferenciaComponent } from './preferencia/preferencia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SpinerComponent } from './spiner/spiner.component';
var firebaseConfig = {
  apiKey: "AIzaSyCzXZ3nZW3_ZaAma5yJc42T3WvFzf5R-oQ",
  authDomain: "buscadorlibros-609f8.firebaseapp.com",
  databaseURL: "https://buscadorlibros-609f8.firebaseio.com",
  projectId: "buscadorlibros-609f8",
  storageBucket: "buscadorlibros-609f8.appspot.com",
  messagingSenderId: "1027790137799",
  appId: "1:1027790137799:web:a969e4330d09f71770d1e2",
  measurementId: "G-KNZJ2Y6F3R"
};
@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    PreferenciaComponent,
    NavbarComponent,
    LoginComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
