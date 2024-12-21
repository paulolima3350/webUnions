import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastra-reuniao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importação necessária para forms reativos
  templateUrl: './cadastra-reuniao.component.html',
  styleUrls: ['./cadastra-reuniao.component.css'], // Corrigido "styleUrl" para "styleUrls"
})
export class CadastraReuniaoComponent {
  // Lista mockada de membros
  membros = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Pereira' },
  ];

  // Declaração do formulário reativo
  formReuniao: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário com validações
    this.formReuniao = this.fb.group({
      membro: ['', Validators.required], // Campo obrigatório
      dataHora: ['', Validators.required], // Campo obrigatório
      local: ['', Validators.required], // Campo obrigatório
      motivo: ['', [Validators.required, Validators.minLength(10)]], // Campo obrigatório com mínimo de 10 caracteres
    });
  }

  // Função de submissão do formulário
  onSubmit(): void {
    if (this.formReuniao.valid) {
      console.log('Dados da Reunião:', this.formReuniao.value);
      alert('Reunião cadastrada com sucesso!');
      this.formReuniao.reset(); // Limpa o formulário após submissão
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
