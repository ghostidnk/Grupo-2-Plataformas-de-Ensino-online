import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-mobille',
  templateUrl: './cadastro-mobille.page.html',
  styleUrls: ['./cadastro-mobille.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CadastroMobillePage implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
