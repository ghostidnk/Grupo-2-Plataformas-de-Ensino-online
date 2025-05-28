
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline ,mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'mail' },
    { title: 'Notificacoes', url: '/notificacoes', icon: 'paper-plane' },
    { title: 'Seguranca', url: '/seguranca', icon: 'heart' },
    { id: "teste",title: 'Privacidade', url: '/privacidade', icon: 'archive' },
  ];
    
  public sair = [{ title: 'Sair', url: '/folder/sair', icon: 'archive' }];
  
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline,
       paperPlaneSharp, heartOutline, heartSharp,
        archiveOutline, archiveSharp, trashOutline, 
          trashSharp, warningOutline, warningSharp, 
          bookmarkOutline, bookmarkSharp, personCircleOutline});
  }
}
