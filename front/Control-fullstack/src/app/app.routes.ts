import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

export const routes: Routes = [
    {
        path: '', component: InicioComponent, children: [
            { path: 'alta', component: FormularioUsuarioComponent }
        ]
    },
    { path: 'acerca-de', component: AcercaDeComponent },
    { path: 'contacto', component: ContactoComponent },
    {
        path: 'inicio', component: InicioComponent, children: [
            { path: 'alta', component: FormularioUsuarioComponent }
        ]
    }
];

