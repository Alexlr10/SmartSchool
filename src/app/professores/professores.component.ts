import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
    [x: string]: any;

  public modalRef: BsModalRef;
  titulo = 'Professores';
  public professorSelecionado: Professor;
  public professores = [

    { id: 1, nome: 'Jose', disciplina: 'Matematica'},
    { id: 2, nome: 'Mateus', disciplina: 'Portugues' },
    { id: 3, nome: 'Vivas', disciplina: 'Fisica' },
    { id: 4, nome: 'Cinthya', disciplina: 'Ingles' },
    { id: 5, nome: 'Santim', disciplina: 'Geografia' },
    { id: 6, nome: 'Lana', disciplina: 'Quimica' },
    { id: 7, nome: 'Pelli', disciplina: 'Historia' },
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
