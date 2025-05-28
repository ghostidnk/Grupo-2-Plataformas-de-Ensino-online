import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import {
  documentTextOutline,

  reorderThree,
  checkmarkCircle,
  notifications,
  book,
  home,
  playCircleOutline,
  logoJavascript

} from 'ionicons/icons';

@Component({
  selector: 'app-inside--mobille',
  templateUrl: './inside-mobille.page.html',
  styleUrls: ['./inside-mobille.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonicModule,
    TabsComponent,
    CommonModule,
    FormsModule,
  ],
})
export class InsideMobillePage implements OnInit {
  constructor() {
    addIcons({
      playCircleOutline, documentTextOutline,
      logoJavascript, reorderThree, checkmarkCircle, notifications, book, home
    });
  }

  ngOnInit() { }
  abaSelecionada: string = 'video';

}
