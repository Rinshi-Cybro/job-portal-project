import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent {
  annForm!:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService){
    this.annForm=this.fb.group({
      short:[''],
      jobname:[''],
      location:[''],
      salary:[''],
      shift:['']
    })
  }
  post(){
    this.api.postjob(this.annForm.value).subscribe(res=>{
      alert('New job has entered')
      this.annForm.reset()
    })
}
}
