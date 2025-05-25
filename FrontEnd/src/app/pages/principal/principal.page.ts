import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule  } from '@ionic/angular';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import { checkmarkCircle, notifications, book,home,personCircleOutline ,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [RouterModule,IonicModule,TabsComponent, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {
  cursos = [
    { nome: 'teste01', duracao: '40h', nivel: 'Iniciante' ,horasConcluidas:25, horasTotais:45 },
    { nome: 'teste02', duracao: '60h', nivel: 'Intermediário',horasConcluidas:25, horasTotais:40 },
    { nome: 'teste03', duracao: '50h', nivel: 'Avançado',horasConcluidas:25, horasTotais:40 },
    { nome: 'teste04', duracao: '30h', nivel: 'Intermediário' ,horasConcluidas:25, horasTotais:40},
  ];
  constructor() {
   addIcons({checkmarkCircle, notifications, book,home, mailOutline, mailSharp, paperPlaneOutline,
       paperPlaneSharp, heartOutline, heartSharp,
        archiveOutline, archiveSharp, trashOutline, 
          trashSharp, warningOutline, warningSharp, 
          bookmarkOutline, bookmarkSharp, personCircleOutline});}

  ngOnInit() {
  }

}
