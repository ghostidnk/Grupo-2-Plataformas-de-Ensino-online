import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule  } from '@ionic/angular';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import { reorderThree,checkmarkCircle, notifications, book,home,personCircleOutline ,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [RouterModule,IonicModule,TabsComponent, CommonModule, FormsModule]
})
export class CursosPage implements OnInit {
  materiasMatematica = [
    { titulo: 'Geometria Analítica' },
    { titulo: 'Probabilidade' },
    { titulo: 'Álgebra Linear' },
    { titulo: 'Cálculo Diferencial' }
  ];
  constructor() {addIcons ({reorderThree,checkmarkCircle,notifications,book,home }); }

  ngOnInit() {
  }

}
