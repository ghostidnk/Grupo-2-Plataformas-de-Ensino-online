import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule  } from '@ionic/angular';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule , CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  login() {
    console.log(this.email , this.password);
  }

  forgotPassword() {
    console.log('Esqueci senha');
  }

  loginWithGoogle() {
    console.log('Login com Google');
  }

  loginWithApple() {
    console.log('Login com Apple');
  }

  signup() {
    console.log('Crie uma conta');
  }
  constructor() { }

  ngOnInit() {
  }

}
