import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },

  {
    path: 'perfil',
    loadComponent: () => import('./folder/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'seguranca',
    loadComponent: () => import('./folder/seguranca/seguranca.page').then( m => m.SegurancaPage)
  },
  {
    path: 'notificacoes',
    loadComponent: () => import('./folder/notificacoes/notificacoes.page').then( m => m.NotificacoesPage)
  },
  {
    path: 'privacidade',
    loadComponent: () => import('./folder/privacidade/privacidade.page').then( m => m.PrivacidadePage)
  },
  {
    path: 'sair',
    loadComponent: () => import('./folder/sair/sair.page').then( m => m.SairPage)
  },

  {
    path: 'cadastro-mobille',
    loadComponent: () => import('./pages/cadastro-mobille/cadastro-mobille.page').then( m => m.CadastroMobillePage)
  },
  {
    path: 'cursos-mobille',
    loadComponent: () => import('./pages/cursos-mobille/cursos-mobille.page').then( m => m.CursosMobillePage)
  },
  {
    path: 'estatistica-mobille',
    loadComponent: () => import('./pages/estatistica-mobille/estatistica-mobille.page').then( m => m.EstatisticaMobillePage)
  },
  {
    path: 'inside-mobille',
    loadComponent: () => import('./pages/inside-mobille/inside-mobille.page').then( m => m.InsideMobillePage)
  },
  {
    path: 'login-mobille',
    loadComponent: () => import('./pages/login-mobille/login-mobille.page').then( m => m.LoginMobillePage)
  },
  {
    path: 'novidades-mobille',
    loadComponent: () => import('./pages/novidades-mobille/novidades-mobille.page').then( m => m.NovidadesMobillePage)
  },
  {
    path: 'principal-mobille',
    loadComponent: () => import('./pages/principal-mobille/principal-mobille.page').then( m => m.PrincipalMobillePage)
  },
];
