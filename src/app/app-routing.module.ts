import { SensoresComponent } from './Vistas/sensores/sensores.component';
import { GraficasComponent } from './Vistas/graficas/graficas.component';
import { DocumentacionComponent } from './Vistas/documentacion/documentacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroUserComponent } from './Auth/registro-user/registro-user.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';

import { SidebarComponent } from './Vistas/sidebar/sidebar.component';

const routes: Routes = [
      {path:'', redirectTo: '/inicio', pathMatch: 'full'},
      {path:'inicio', component: InicioComponent},
      {path:'sensores', component: SensoresComponent},
      {path:'sidebar', component: SidebarComponent},  
      {path:'registro-user', component: RegistroUserComponent},
      {path:'login', component: LoginComponent},
      {path:'docu', component:DocumentacionComponent},
      {path:'grafi', component:GraficasComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
