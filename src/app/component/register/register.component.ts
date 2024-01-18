import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm:FormGroup
  
  constructor(private fb:FormBuilder,private serv:ApiService,private route:Router){
    this.regForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      phone:['',Validators.required],
      address1:['',Validators.required],
      address2:['',Validators.required],
      address3:['',Validators.required],
      education:['',Validators.required],
      about:['',Validators.required],

    
      id:['',Validators.required],
      password: ['',Validators.required],
      country:['',Validators.required],
      state:['',Validators.required],
      
      role:[''],
      isActive:[false]
    })
    }
    
    proceedRegistration(){
      if(this.regForm.valid){
        this.serv.ProceedRegister(this.regForm.value).subscribe(res=>{
          alert('You have succcessfully entered')
          this.route.navigate(['login'])
          
        })  
        console.log(this.regForm.value)

      }else {
        alert('Please enter valid data')
      }
      
    }

}
