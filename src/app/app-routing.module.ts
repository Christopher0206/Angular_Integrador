import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroUserComponent } from './Auth/registro-user/registro-user.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { SensoresComponent } from './Vistas/sensores/sensores.component';
import { SidebarComponent } from './Vistas/sidebar/sidebar.component';

const routes: Routes = [
      {path:'', redirectTo: '/inicio', pathMatch: 'full'},
      {path:'inicio', component: InicioComponent},
    {path:'sidebar', component: SidebarComponent},
    {path:'sensores', component: SensoresComponent},
    {path:'registro-user', component: RegistroUserComponent},
    {path:'login', component: LoginComponent}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
