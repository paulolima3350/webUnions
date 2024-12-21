import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-convidado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa os módulos necessários
  templateUrl: './criar-convidado.component.html',
  styleUrls: ['./criar-convidado.component.css'],
})
export class CriarConvidadoComponent {
  membro = { nome: 'John Doe' }; // Mock do membro ativo
  formConvidado: FormGroup; // Formulário reativo

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário com validações
    this.formConvidado = this.fb.group({
      nome: ['', Validators.required],
      dia: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      especialidade: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formConvidado.valid) {
      console.log('Dados do Convidado:', this.formConvidado.value);
      alert('Convidado cadastrado com sucesso!');
      this.formConvidado.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
