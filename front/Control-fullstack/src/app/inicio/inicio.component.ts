import { Component, OnInit } from '@angular/core';
import { FormularioUsuarioComponent } from '../formulario-usuario/formulario-usuario.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../_modelo/Usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormularioUsuarioComponent, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private servicio: UsuarioService) { }
  ngOnInit(): void {
    this.servicio.usuarioCambio
      .subscribe((data) => { this.usuarios = data })

    this.servicio.listar()
      .subscribe(datos => {
        this.usuarios = datos;
      })
  }

  recibirAviso(listaActualizada: Observable<Usuario[]>) {
    listaActualizada.subscribe(data => this.usuarios = data);
    this.servicio.listar()
      .subscribe(datos => {
        this.usuarios = datos;
      })
  }

}
