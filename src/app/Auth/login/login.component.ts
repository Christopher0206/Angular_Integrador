import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private api:ServiceService) { }
  ngOnInit(): void {
  }
  onLogin(form:Login){
    this.api.loginByEmail(form).subscribe(data =>{
     console.log(data);
   })
}

}
