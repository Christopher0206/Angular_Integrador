import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:string = "";
  constructor(private httpcliente:HttpClient) { }

  loginByEmail(form:Login):Observable<Response>{

    let direccion = this.url + "auth";
    return this.httpcliente.post<Response>(direccion,form)
    
  }

  crearSensor(sensor:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('Aqui va la api',sensor,{headers:tokenHeader})
  }
  mostrarSensor(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('Aqui va la api',{headers:tokenHeader})
  }
}
