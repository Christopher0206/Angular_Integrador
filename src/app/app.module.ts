import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { NavComponent } from './Vistas/nav/nav.component';
import { SensoresComponent } from './Vistas/sensores/sensores.component';
import { SidebarComponent } from './Vistas/sidebar/sidebar.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroUserComponent } from './Auth/registro-user/registro-user.component';
import { DocumentacionComponent } from './Vistas/documentacion/documentacion.component';
import { GraficasComponent } from './Vistas/graficas/graficas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    SensoresComponent,
    SidebarComponent,
    LoginComponent,
    RegistroUserComponent,
    DocumentacionComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
