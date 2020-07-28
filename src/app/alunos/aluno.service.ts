import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor(private http: HttpClient) { }

  baseUrl = `${environment.UrlPrincipal}/api/aluno`;

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseUrl}/${ id }`);
  }

  post(aluno: Aluno) {
    return this.http.post(`${this.baseUrl}`, aluno)
  }

  put(aluno: Aluno) {
    return this.http.put(`${this.baseUrl}/${aluno.id}`, aluno)
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
