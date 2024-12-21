import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; // Importa Component para criação do componente
import { Router, RouterModule } from '@angular/router'; // Importa Router para navegação

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  usuarioLogado: string = 'Paulo Matheus'; // Nome do usuário logado
  logoPath: string = 'assets/img/logo-unions.png'; // Caminho da logomarca

  // Controla a exibição do Navbar
  isLoggedIn: boolean = true;

  constructor(private router: Router) {}

  // Método de logout
  logout(): void {
    console.log('Logout realizado');
    this.usuarioLogado = ''; // Simula o logout
    this.isLoggedIn = false; // Desabilita o Navbar
    alert('Você saiu da aplicação!');
    this.router.navigate(['/login']); // Redireciona para a rota /login
  }
}