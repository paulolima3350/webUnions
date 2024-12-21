import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastra-referencia',
  standalone: true,
  imports: [CommonModule, FormsModule], // Incluindo CommonModule e FormsModule
  templateUrl: './cadastra-referencia.component.html',
  styleUrls: ['./cadastra-referencia.component.css']
})
export class CadastraReferenciaComponent {
  // Lista de membros disponíveis para seleção
  membros = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Pereira' }
  ];

  // Estrelas para avaliação
  estrelas = [1, 2, 3, 4, 5];
  avaliacao = 0;

  // Objeto para armazenar os dados do formulário
  referencia = {
    membro: '',
    observacoes: '',
    tipoReferencia: '',
    avaliacao: 0
  };

  // Define a avaliação clicada
  setAvaliacao(estrela: number): void {
    this.avaliacao = estrela;
    this.referencia.avaliacao = estrela;
  }

  // Método para cadastrar a referência
  cadastrarReferencia(): void {
    console.log('Dados do formulário:', this.referencia);
    alert('Referência cadastrada com sucesso!');

    // Reinicia os campos do formulário
    this.referencia = {
      membro: '',
      observacoes: '',
      tipoReferencia: '',
      avaliacao: 0
    };
    this.avaliacao = 0;
  }
}
