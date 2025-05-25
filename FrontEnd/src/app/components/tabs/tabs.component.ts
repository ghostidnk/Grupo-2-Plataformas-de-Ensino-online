import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { checkmarkCircle, notifications, book,home,personCircleOutline ,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  constructor() {  addIcons({checkmarkCircle, notifications, book,home, mailOutline, mailSharp, paperPlaneOutline,
       paperPlaneSharp, heartOutline, heartSharp,
        archiveOutline, archiveSharp, trashOutline, 
          trashSharp, warningOutline, warningSharp, 
          bookmarkOutline, bookmarkSharp, personCircleOutline})}

  ngOnInit() {}

}
