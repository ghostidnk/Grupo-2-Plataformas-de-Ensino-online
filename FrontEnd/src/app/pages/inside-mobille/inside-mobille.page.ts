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
  personCircleOutline,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
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
    addIcons({ reorderThree, checkmarkCircle, notifications, book, home });
  }

  ngOnInit() {}
}
