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
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/principal/principal.page').then( m => m.PrincipalPage)
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
    path: 'estatistica',
    loadComponent: () => import('./pages/estatistica/estatistica.page').then( m => m.EstatisticaPage)
  },
  {
    path: 'novidades',
    loadComponent: () => import('./pages/novidades/novidades.page').then( m => m.NovidadesPage)
  },
  {
    path: 'cursos',
    loadComponent: () => import('./pages/cursos/cursos.page').then( m => m.CursosPage)
  },
];
