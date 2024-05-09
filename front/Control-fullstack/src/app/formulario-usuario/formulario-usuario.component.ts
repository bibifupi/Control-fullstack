import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../_modelo/Usuario';
@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {
  formularioUsuario: FormGroup;
  id:number=0;
  edicion: boolean = false;
  constructor(private servicio: UsuarioService,
    private route: ActivatedRoute,
    private router: Router){
      this.formularioUsuario = new FormGroup({
        'idUsuario': new FormControl(0),
        'nombre': new FormControl(''),
        'correo': new FormControl('')
      });
    }
    ngOnInit(): void {
      this.route.params
        .subscribe(data => {
          this.id = data['id'];
          this.edicion = data['id'] != null;
          this.formaFormulario();
  
        });
    }

    formaFormulario() {
      if(this.edicion){
        this.servicio.listarPorId(this.id)
          .subscribe(data => {
            this.formularioUsuario = new FormGroup({
              'idUsuario': new FormControl(data.idUsuario),
              'nombre': new FormControl(data.nombre),
              'correo': new FormControl(data.correo)
            });
          })
      }
    }
    
    enviarFormulario(){
      let u:Usuario = {
        'idUsuario': this.formularioUsuario.value['idUsuario'],
        'nombre' : this.formularioUsuario.value['nombre'],
        'correo': this.formularioUsuario.value['correo']
      }
      if(this.edicion){
     
        this.servicio.actualizar(u)
          .subscribe(()=>{
            this.servicio.listar()
              .subscribe(data=>{
                this.servicio.usuarioCambio.next(data);
              });
          });
      }else{
        this.servicio.alta(u)
          .subscribe(()=>{
            this.servicio.listar()
              .subscribe(data => {
                this.servicio.usuarioCambio.next(data);
              });
          });
      }
      this.router.navigate([''])
    }

}
