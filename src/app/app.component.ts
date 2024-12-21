import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { CadastraMembroComponent } from "./pages/cadastra-membro/cadastra-membro.component";
import { AreaMembroComponent } from "./pages/area-membro/area-membro.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule  ,RouterOutlet, LoginComponent, CadastraMembroComponent, AreaMembroComponent, NavbarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webUnion';


  constructor(private router: Router) {} // Injeta o serviço Router

  // Método para verificar se o Navbar deve ser exibido
  shouldShowNavbar(): boolean {
    return this.router.url !== '/login'; // Exibe o Navbar apenas se a rota não for /login
  }

}
