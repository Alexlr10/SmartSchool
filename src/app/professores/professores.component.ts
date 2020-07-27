import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from './professor.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
    [x: string]: any;

  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  titulo = 'Professores';
  public professorSelecionado: Professor;
  public professores: Professor[];


  voltar() {
    this.professorSelecionado = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private professorService: ProfessorService) {
    this.criarForm();
  }

  ngOnInit(): void {
    this.carregarProfessor();
  }

  criarForm() {
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
    });
  }

  professorSubmit() {
    this.salvarProfessor(this.professorForm.value);
  }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  salvarProfessor(professor: Professor) {
    this.alunoService.put(professor.id, professor).subscribe(
      (retorno: Professor) => {
        console.log(retorno);
        this.carregarProfessor();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  carregarProfessor() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }



}
