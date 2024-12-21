import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importação necessária para routerLink

@Component({
  selector: 'app-area-membro',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adiciona RouterModule
  templateUrl: './area-membro.component.html',
  styleUrls: ['./area-membro.component.css'],
})
export class AreaMembroComponent implements OnInit {
  membro: any = {}; // Dados do membro
  modulos: any[] = []; // Lista de módulos

  constructor() {}

  ngOnInit(): void {
    this.carregarMembro();
    this.carregarModulos();
  }

  // Simula o carregamento de informações do membro
  carregarMembro(): void {
    console.log('Carregando membro...');
    setTimeout(() => {
      this.membro = {
        id: 1,
        nome: 'Paulo Matheus',
        email: 'paulo@example.com',
        telefone: '(11) 98765-4321',
      };
      console.log('Membro carregado:', this.membro);
    }, 1000); // Simula um atraso de 1 segundo
  }

  // Simula o carregamento de módulos
  carregarModulos(): void {
    console.log('Carregando módulos...');
    setTimeout(() => {
      this.modulos = [
        {
          id: 1,
          nome: 'Reunião 1x1',
          status: 'Concluído',
          icone: 'bi bi-calendar-plus',
        },
        {
          id: 2,
          nome: 'Testemunho',
          status: 'Em Progresso',
          icone: 'bi bi-person',
        },
        {
          id: 3,
          nome: 'Referência',
          status: 'Não Iniciado',
          icone: 'bi bi-bookmark',
        },
        {
          id: 4,
          nome: 'Unidade de Educação',
          status: 'Em Progresso',
          icone: 'bi bi-house-door',
        },
        {
          id: 5,
          nome: 'OPNF',
          status: 'Concluído',
          icone: 'bi bi-check',
        },
      ];
      console.log('Módulos carregados:', this.modulos);
    }, 1500); // Simula um atraso de 1,5 segundo
  }

  // Ação ao clicar em "Acessar"
  acessarModulo(modulo: any): void {
    console.log('Acessando módulo:', modulo);
    alert(`Você está acessando o módulo: ${modulo.nome}`);
  }
}
