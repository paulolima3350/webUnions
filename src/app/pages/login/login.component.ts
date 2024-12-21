import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para diretivas como *ngIf e *ngFor
import { FormsModule } from '@angular/forms'; // Necessário para [(ngModel)]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionados os módulos necessários
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrigido 'styleUrl' para 'styleUrls'
})
export class LoginComponent {
  // Credenciais mockadas
  credentials = {
    username: '',
    password: '',
  };

  // Mock de usuário válido
  validUser = {
    username: 'admin',
    password: '12345',
  };

  constructor(private router: Router) {}

  // Método de login
  login(): void {
    if (
      this.credentials.username === this.validUser.username &&
      this.credentials.password === this.validUser.password
    ) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/home']); // Redireciona para a rota /home
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}
