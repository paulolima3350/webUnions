import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastra-opnf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastra-opnf.component.html',
  styleUrl: './cadastra-opnf.component.css'
})

export class CadastroOpnfComponent {
  // Dados Mockados da Referência
  referencia = {
    nome: 'João Pereira',
    dataContato: '10/12/2024',
    status: 'Negócio fechado',
    telefone: '(11) 98765-4321',
    especialidade: 'Consultoria Empresarial',
    observacoes: 'Cliente satisfeito, recomendação positiva.',
  };

  // Modelo para os Dados do Formulário
  opnf = {
    valor: '',
    observacoes: '',
  };

  constructor() {}

  // Método para cadastrar o OPNF
  cadastrarOPNF(): void {
    console.log('Dados do OPNF cadastrados:', this.opnf);
    alert('Cadastro de OPNF realizado com sucesso!');
    // Reseta os campos do formulário
    this.opnf = {
      valor: '',
      observacoes: '',
    };
  }
}