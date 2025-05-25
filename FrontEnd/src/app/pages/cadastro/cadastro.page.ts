import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule  } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroPage implements OnInit {

  email = '';
  confirmEmail = '';
  password = '';
  telefone = '';
  aceitouTermos = false;

  cadastrar(): void {
    console.log({
      email: this.email,
      password: this.password,
      telefone: this.telefone,
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
