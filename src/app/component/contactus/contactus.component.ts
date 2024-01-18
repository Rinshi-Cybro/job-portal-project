import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm!:FormGroup
  id:any
 
constructor(private fb:FormBuilder,private api:ApiService){
this.contactForm=this.fb.group({
  name:[''],
  email:[''],
  contact:[''],
  message:['']
})
}
ngOnInit(): void {
  const userId = sessionStorage.getItem('username');
  this.id=userId
}
  cancel(){
    this.contactForm.reset()
  }
  send() {
    // Set the email value from the id variable
    this.contactForm.patchValue({ email: this.id });
  
    // Now, you can submit the form data, and the email value will be included
    this.api.post(this.contactForm.value).subscribe(() => {
      alert('Successfully posted');
    });
  }
  
}
