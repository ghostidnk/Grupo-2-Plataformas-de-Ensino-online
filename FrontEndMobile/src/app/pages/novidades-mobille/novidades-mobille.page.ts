import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import {
  reorderThree,
  checkmarkCircle,
  notifications,
  book,
  home,

} from 'ionicons/icons';

@Component({
  selector: 'app-novidades-mobille',
  templateUrl: './novidades-mobille.page.html',
  styleUrls: ['./novidades-mobille.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonicModule,
    TabsComponent,
    CommonModule,
    FormsModule,
  ],
})
export class NovidadesMobillePage implements OnInit {
  constructor() {
    addIcons({ reorderThree, checkmarkCircle, notifications, book, home });
  }

  ngOnInit() {}
}
