import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { Usuario } from './_modelo/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8080/usuarios';
  usuarioCambio = new Subject<Usuario[]>();

  listar(): Observable<Usuario[]> {
    console.log("llamando bd");
    
    return this.http.get<Usuario[]>(this.url)
    .pipe(
      map(data=>{console.log("dentro de la llamada");
       return data.sort((a,b)=> a.idUsuario-b.idUsuario);
    })
    );
  }
  alta(u: Usuario) {
    return this.http.post(this.url, u);
  }
  eliminar(id: number): Observable<number> {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
  actualizar(u: Usuario) {
    return this.http.put(this.url, u);
  }
  listarPorId(id:number){
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  constructor(private http: HttpClient) { }
}