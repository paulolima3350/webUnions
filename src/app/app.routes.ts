import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AreaMembroComponent } from './pages/area-membro/area-membro.component';
import { CadastraMembroComponent } from './pages/cadastra-membro/cadastra-membro.component';
import { CriarConvidadoComponent } from './pages/criar-convidado/criar-convidado.component';
import { CadastraReuniaoComponent } from './pages/cadastra-reuniao/cadastra-reuniao.component';
import { CadastraReferenciaComponent } from './pages/cadastra-referencia/cadastra-referencia.component';
import { LoginComponent } from './pages/login/login.component';

import { UnidadeEducaoComponent } from './pages/unidade-educao/unidade-educao.component';
import { CadastraTestemunhoComponent } from './pages/cadastra-testemunho/cadastra-testemunho.component';
import { CadastroOpnfComponent } from './pages/cadastra-opnf/cadastra-opnf.component';
import { ConsultarReferenciaComponent } from './pages/consultar-referencia/consultar-referencia.component';


export const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full', // Redireciona para "home"
      },
      {
        path: 'home',
        component: AreaMembroComponent, // Página inicial
      },
      {
        path: 'cadastrar-membro',
        component: CadastraMembroComponent, // Componente exemplo para "Cadastrar Membro"
      },
      {
        path: 'criar-convidado',
        component: CriarConvidadoComponent,
      },
      {
        path: 'cadastrar-reuniao',
        component: CadastraReuniaoComponent,
      },
      {
        path: 'cadastra-testemunho',
        component: CadastraTestemunhoComponent,
      },
      {
        path: 'cadastra-referencia',
        component: CadastraReferenciaComponent,
      },
      {
        path: 'cadastra-opnf',
        component: CadastroOpnfComponent,
      },
      {
        path: 'unidade-educacao',
        component: UnidadeEducaoComponent,
      },
      {
        path: 'consulta-referencia',
        component: ConsultarReferenciaComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },

    ],
  },
];
