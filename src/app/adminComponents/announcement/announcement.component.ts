import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  annForm!:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService){
    this.annForm=this.fb.group({
      title:[''],
      subject:[''],
      details:['']
    })
  }
  
  post(){
    this.api.postAnnouncement(this.annForm.value).subscribe(res=>{
      alert('Announcement has made')
      this.annForm.reset()
    })
  }
}
