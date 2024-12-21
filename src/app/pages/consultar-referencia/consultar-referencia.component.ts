import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultar-referencia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './consultar-referencia.component.html',
  styleUrl: './consultar-referencia.component.css'
})
export class ConsultarReferenciaComponent {
 // Dados das referências mockados
 referencias = [
  {
    id: 1,
    nome: 'Maria Silva',
    observacoes: 'Interessada em parcerias comerciais.',
    tipo: 'Interna',
    status: 'Não entrei em contato',
  },
  {
    id: 2,
    nome: 'Carlos Oliveira',
    observacoes: 'Busca contato para novos negócios.',
    tipo: 'Externa',
    status: 'Contatado',
  },
  {
    id: 3,
    nome: 'Ana Costa',
    observacoes: 'Referência para consultoria financeira.',
    tipo: 'Interna',
    status: 'Sem resposta de referência',
  },
  {
    id: 4,
    nome: 'João ',
    observacoes: 'Negociação concluída com sucesso.',
    tipo: 'Externa',
    status: 'Negócio fechado',
  },
  {
    id: 5,
    nome: 'João Pereira Lima',
    observacoes: 'Negociação concluída com sucesso.',
    tipo: 'Externa',
    status: 'Negócio fechado',
  },
];

// Status dos filtros
statusFilter: string = '';

// Método para filtrar as referências de acordo com o status
filtrarReferencias(status: string): void {
  this.statusFilter = status;
}

// Método para limpar o filtro
limparFiltro(): void {
  this.statusFilter = '';
}

// Método para obter as referências filtradas
get referenciasFiltradas() {
  if (!this.statusFilter) {
    return this.referencias;
  }
  return this.referencias.filter((referencia) => referencia.status === this.statusFilter);
}
}