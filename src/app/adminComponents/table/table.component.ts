import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { HomeComponent } from '../../component/home/home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(HomeComponent) view!: HomeComponent

  userlist: any

  constructor(private service: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.LoadUser()
  }

  LoadUser() {
    this.service.getAll().subscribe(res => {
      this.userlist = res
    })
  }
  

  delete(id: any) {
    this.service.delete(id).subscribe(res => {
      alert('Deleted')
      this.LoadUser()
    })
  }
}
