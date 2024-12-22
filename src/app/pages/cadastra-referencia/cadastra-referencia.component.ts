import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-referencia',
  standalone: true,
  templateUrl: './cadastra-referencia.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule],
  styleUrls: ['./cadastra-referencia.component.css'],
})
export class CadastraReferenciaComponent implements OnInit { // Use 'OnInit' corretamente
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
          id: membro.id.toString(),
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
    this.submitted = true;

    if (!this.referencia.avaliadoId || this.referencia.avaliadoId === 'undefined') {
      alert('Por favor, selecione um membro avaliado.');
      return;
    }

    if (this.referencia.observacoes.length < 10) {
      alert('As observações devem conter no mínimo 10 caracteres.');
      return;
    }

    const payload = {
      observacoes: this.referencia.observacoes,
      tipoReferencia: this.referencia.tipoReferencia,
      avaliacao: this.referencia.avaliacao,
      avaliadorId: this.avaliadorId,
      avaliadoId: this.referencia.avaliadoId,
    };

    this.http.post('http://localhost:8080/api/referencias', payload).subscribe({
      next: (response) => {
        alert('Referência cadastrada com sucesso!');
        this.resetFormulario();
      },
      error: (err) => {
        console.error('Erro ao cadastrar referência:', err);
        alert('Erro ao cadastrar referência. Tente novamente.');
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