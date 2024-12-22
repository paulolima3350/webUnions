import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastra-referencia',
  standalone: true,
  templateUrl: './cadastra-referencia.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule],
  styleUrls: ['./cadastra-referencia.component.css'],
})
export class CadastraReferenciaComponent implements OnInit {
  membros: { id: string; nome: string }[] = [];
  avaliadorId = 'e45d88d9-ff3a-47ca-b62f-b4512b23d98a';
  referencia = {
    avaliadoId: '',
    observacoes: '',
    tipoReferencia: 'INTERNA',
    avaliacao: 'PESSIMO',
  };
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarMembros();
  }

  carregarMembros(): void {
    this.http.get<any[]>('http://localhost:8080/api/membros').subscribe({
      next: (data) => {
        this.membros = data.map((membro) => ({
          id: membro.id,
          nome: membro.nome,
        }));
        console.log('Membros carregados:', this.membros);
      },
      error: (err) => {
        console.error('Erro ao carregar membros:', err);
        alert('Não foi possível carregar a lista de membros.');
      },
    });
  }

  cadastrarReferencia(): void {
    this.submitted = true; // Marca que o formulário foi submetido
  
    // Validações do formulário
    if (!this.referencia.avaliadoId || this.referencia.avaliadoId === 'undefined') {
      console.error('Erro: avaliadoId está vazio ou inválido:', this.referencia.avaliadoId);
      alert('Por favor, selecione um membro válido.');
      return;
    }
    if (this.referencia.observacoes.length < 10) {
      console.error('Erro: observações está vazio ou possui menos de 10 caracteres:', this.referencia.observacoes);
      alert('Por favor, preencha o campo de observações com no mínimo 10 caracteres.');
      return;
    }
  
    const payload: { [key: string]: string } = {
      observacoes: this.referencia.observacoes,
      tipoReferencia: this.referencia.tipoReferencia,
      avaliacao: this.referencia.avaliacao,
      avaliadorId: this.avaliadorId,
      avaliadoId: this.referencia.avaliadoId,
    };
  
    // Remove valores inválidos
    Object.keys(payload).forEach((key) => {
      if (!payload[key] || payload[key] === 'undefined') {
        console.error(`Erro: O campo "${key}" está vazio ou inválido.`, payload[key]);
        delete payload[key];
      }
    });
  
    console.log('Payload final enviado para a API:', payload);
  
    this.http.post('http://localhost:8080/api/referencias', payload).subscribe({
      next: (response) => {
        console.log('Referência cadastrada com sucesso!', response);
        alert('Referência cadastrada com sucesso!');
        this.resetFormulario();
      },
      error: (err) => {
        console.error('Erro ao cadastrar referência:', err);
        alert('Erro ao cadastrar referência. Verifique os dados e tente novamente.');
      },
    });
  }

  resetFormulario(): void {
    this.referencia = {
      avaliadoId: '',
      observacoes: '',
      tipoReferencia: 'INTERNA',
      avaliacao: 'PESSIMO',
    };
    this.submitted = false;
  }
}
