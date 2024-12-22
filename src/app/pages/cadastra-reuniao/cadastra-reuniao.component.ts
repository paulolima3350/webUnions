import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importação correta do módulo HttpClientModule

@Component({
  selector: 'app-cadastra-reuniao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // Corrigido para usar HttpClientModule
  templateUrl: './cadastra-reuniao.component.html',
  styleUrls: ['./cadastra-reuniao.component.css'],
})
export class CadastraReuniaoComponent implements OnInit {
  nomesMembros: { id: string; nome: string }[] = []; // IDs e Nomes dos membros
  formReuniao: FormGroup;
  solicitanteId = '3fa85f64-5717-4562-b3fc-2c963f66afa6'; // Solicitante fixo

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Configuração do formulário
    this.formReuniao = this.fb.group({
      membro: ['', Validators.required], // Será mapeado para convidadoId
      dataHora: ['', Validators.required],
      local: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.carregarNomesMembros();
  }

  carregarNomesMembros(): void {
    // Requisição GET para obter membros
    this.http.get<any[]>('http://localhost:8080/api/membros').subscribe({
      next: (data) => {
        this.nomesMembros = data.map((membro) => ({
          id: membro.idMembro,
          nome: membro.nome,
        }));
        console.log('Membros carregados:', this.nomesMembros);
      },
      error: (err) => {
        console.error('Erro ao carregar nomes dos membros:', err);
        alert('Não foi possível carregar os nomes dos membros. Tente novamente mais tarde.');
      },
    });
  }

  onSubmit(): void {
    if (this.formReuniao.valid) {
      // Construção do payload com os dados do formulário
      const reuniaoData = {
        dataEHora: new Date(this.formReuniao.value.dataHora).toISOString(), // Formatação da data
        local: this.formReuniao.value.local, // Local fornecido no formulário
        motivo: this.formReuniao.value.motivo, // Motivo fornecido no formulário
        solicitanteId: this.solicitanteId, // ID fixo do solicitante
        convidadoId: this.formReuniao.value.membro, // ID do membro selecionado como convidado
      };

      // Log para verificar o payload enviado
      console.log('Payload enviado:', reuniaoData);

      // Requisição POST para cadastrar a reunião
      this.http.post('http://localhost:8080/api/reunioes', reuniaoData).subscribe({
        next: (response) => {
          console.log('Reunião cadastrada com sucesso!', response);
          alert('Reunião cadastrada com sucesso!');
          this.formReuniao.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar reunião:', err);
          alert('Não foi possível cadastrar a reunião. Tente novamente mais tarde.');
        },
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
