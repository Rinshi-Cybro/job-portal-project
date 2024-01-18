import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

vacancy:any
constructor(private api:ApiService){}
  ngOnInit(): void {
    this.get()
  }
  get(){
   this.api.get().subscribe(res=>{
    this.vacancy=res
   })
   
  }
}
