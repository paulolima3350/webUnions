import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastra-membro',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule, FormsModule, RouterModule], // Adicionando FormsModule
  templateUrl: './cadastra-membro.component.html',
  styleUrls: ['./cadastra-membro.component.css']
})
export class CadastraMembroComponent {
  // Objeto para armazenar os dados do formulário
  membro = {
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    senha: '',
    curriculo: '',
    site: '',
    grupoOrigem: ''
  };

  // Lista de grupos de origem para o select
  grupos = [
    { id: '1', nome: 'Grupo A' },
    { id: '2', nome: 'Grupo B' },
    { id: '3', nome: 'Grupo C' }
  ];

  // Função chamada ao enviar o formulário
  cadastrarMembro(): void {
    console.log('Dados do Membro:', this.membro);
    alert('Membro cadastrado com sucesso!');
    // Limpar o formulário após o envio
    this.membro = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      senha: '',
      curriculo: '',
      site: '',
      grupoOrigem: ''
    };
  }
}
