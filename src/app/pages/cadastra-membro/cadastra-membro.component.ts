import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importação do HttpClientModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastra-membro',
  standalone: true, // Indica que o componente é standalone
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule], // Incluído HttpClientModule
  templateUrl: './cadastra-membro.component.html',
  styleUrls: ['./cadastra-membro.component.css']
})
export class CadastraMembroComponent implements OnInit {
  // Objeto para armazenar os dados do formulário
  membro = {
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    senha: '',
    curriculo: '',
    siteEmpresa: '',
    grupoOrigem: ''
  };

  // Lista de grupos a ser carregada da API
  grupos: { id: string; nome: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarGrupos();
  }

  // Método para carregar os grupos da API
  carregarGrupos(): void {
    this.http.get<{ id: string; nome: string }[]>('http://localhost:8080/api/grupos').subscribe({
      next: (data) => {
        this.grupos = data;
        console.log('Grupos carregados:', this.grupos);
      },
      error: (err) => {
        console.error('Erro ao carregar grupos:', err);
        alert('Não foi possível carregar os grupos. Tente novamente mais tarde.');
      }
    });
  }

  // Função chamada ao enviar o formulário
  cadastrarMembro(): void {
    const payload = {
      nome: this.membro.nome,
      email: this.membro.email,
      telefone: this.membro.telefone,
      empresa: this.membro.empresa,
      senha: this.membro.senha,
      curriculo: this.membro.curriculo,
      siteEmpresa: this.membro.siteEmpresa,
      gruposIds: [this.membro.grupoOrigem] // Transformar o grupo selecionado em uma lista
    };

    // Log para depuração
    console.log('Payload enviado:', payload);

    // Enviar os dados ao backend
    this.http.post('http://localhost:8080/api/membros', payload).subscribe({
      next: (response) => {
        console.log('Membro cadastrado com sucesso:', response);
        alert('Membro cadastrado com sucesso!');
        // Limpar o formulário após o envio
        this.membro = {
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          senha: '',
          curriculo: '',
          siteEmpresa: '',
          grupoOrigem: ''
        };
      },
      error: (err) => {
        console.error('Erro ao cadastrar membro:', err);
        alert('Não foi possível cadastrar o membro. Tente novamente mais tarde.');
      }
    });
  }
}
