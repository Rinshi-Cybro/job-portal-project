import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedback:any
constructor(private api:ApiService){}
  ngOnInit(): void {
    this.get()
  }
  get(){
this.api.getFeedback().subscribe(res=>{
  this.feedback=res
})
  }
}
