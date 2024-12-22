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
  membros: { id: string; nome: string }[] = []; // Lista de membros
  avaliadorId = '3d591d82-8331-411d-a672-fbef9c69969b'; // ID fixo do avaliador
  referencia = {
    avaliadoId: '', // ID do membro selecionado
    observacoes: '',
    tipoReferencia: 'INTERNA',
    avaliacao: 'PESSIMO',
  };
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarMembros(); // Carrega os membros ao inicializar o componente
  }

  carregarMembros(): void {
    console.log('Iniciando o carregamento de membros...');
    this.http.get<any[]>('http://localhost:8080/api/membros').subscribe({
      next: (data) => {
        console.log('Dados recebidos da API:', data);

        // Filtra e processa membros válidos
        this.membros = data
          .filter((membro) => membro && membro.id && membro.nome) // Remove membros inválidos
          .map((membro) => ({
            id: membro.id.toString(), // Garante que o ID seja string
            nome: membro.nome,
          }));

        console.log('Membros processados:', this.membros);

        if (this.membros.length === 0) {
          alert('Nenhum membro encontrado. Verifique se há membros cadastrados.');
        }
      },
      error: (err) => {
        console.error('Erro ao carregar membros:', err);
        alert('Não foi possível carregar a lista de membros. Verifique sua conexão ou tente novamente mais tarde.');
      },
    });
  }

  cadastrarReferencia(): void {
    this.submitted = true;

    console.log('Tentando cadastrar referência com os dados:', this.referencia);

    // Validações do formulário
    if (!this.referencia.avaliadoId || this.referencia.avaliadoId === 'undefined') {
      alert('Por favor, selecione um membro avaliado.');
      return;
    }

    if (this.referencia.observacoes.trim().length < 10) {
      alert('O campo de observações deve conter no mínimo 10 caracteres.');
      return;
    }

    const payload = {
      observacoes: this.referencia.observacoes.trim(),
      tipoReferencia: this.referencia.tipoReferencia,
      avaliacao: this.referencia.avaliacao,
      avaliadorId: this.avaliadorId,
      avaliadoId: this.referencia.avaliadoId,
    };

    console.log('Enviando payload:', payload);

    this.http.post('http://localhost:8080/api/referencias', payload).subscribe({
      next: (response: any) => {
        console.log('Referência cadastrada com sucesso:', response);
        alert('Referência cadastrada com sucesso!');
        this.resetFormulario();
      },
      error: (err: any) => {
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
    console.log('Formulário resetado.');
  }
}
