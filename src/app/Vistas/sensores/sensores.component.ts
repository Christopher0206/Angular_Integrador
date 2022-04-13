import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { Sensor } from 'src/app/models/sensor';
import Swal from 'sweetalert';






@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {


  
  sensor:Sensor= {
    "id":'',
    "Nombre":''
  }


  sensores:Sensor[]|undefined
  FormularioRegistro= new FormGroup({
    Nombre_Sensor: new  FormControl(null,[Validators.required])
  })

  constructor(private sensorservi:ServiceService){
    const contador=interval(3000)
   contador.subscribe(()=>{
     this.sensorservi.mostrarSensor().subscribe((data:any)=>{
       this.sensor=data
     })
   })
 }


 
 showModal(){
  if(this.FormularioRegistro.valid){
    Swal({
      title: "Sensor Registrado Con Exito",
      icon: "success",
    });
  }
  else{
   Swal({
     title:'Ocurrio un ERROR al intentar registrar el sensor',
     icon:"warning"
   })
  }


}
crearSensor(){
  this.sensorservi.crearSensor(this.sensor).subscribe((data:any)=>{
    this.sensor=data
 })
}

  ngOnInit(): void {
  }
  
}




