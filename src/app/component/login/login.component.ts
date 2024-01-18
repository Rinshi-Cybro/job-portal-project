import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logForm:FormGroup
  userData:any

  constructor(private fb:FormBuilder, private api:ApiService, private route:Router){
  
    this.logForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    sessionStorage.clear()
  }

  proceedLogIn(data: any) {
    if (this.logForm.valid) {
      this.api.getByCode(this.logForm.value.username).subscribe((res) => {
        this.userData = res;
        if (this.userData.password === this.logForm.value.password) {
          if (this.userData.isActive) {
            if (this.userData.role === 'admin') {
              // Admin login logic
              sessionStorage.setItem('username', this.userData.id);
              sessionStorage.setItem('userrole', this.userData.role);
              this.route.navigate([`adminhome`]); // Navigate to admin dashboard
            } else {
              // Regular user login 
              sessionStorage.setItem('username', this.userData.id);
              sessionStorage.setItem('userrole', this.userData.role);
              this.route.navigate([`home`]); // Navigate to user dashboard
            }
          } else {
            alert('Inactive User. Please contact admin');
          }
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
  
}
