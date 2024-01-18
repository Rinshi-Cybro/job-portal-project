import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  id: any
  no: any
  user: any

  data = {
    firstname: '',
    lastname: '',
    phone: '',
    address1: '',
    address2: '',
    address3: '',
    education: '',
    about: '',
    id: '',
    password: '',
    country: '',
    state: '',
    role: '',
    isActive: ''
  }
  
  viewData: any

  constructor(private api: ApiService, private service: ApiService) { }
  ngOnInit(): void {
    // this.id=this.actRoute.snapshot.paramMap.get('id')
    // this.service.viewUser(this.id).subscribe(res=>{
    //   this.data=res

    // })
    const userId = sessionStorage.getItem('username');
    const genderId = sessionStorage.getItem('gender');

    // Check if userId is not null or undefined
    if (userId) {
      // You can now use the userId in your component
      this.id = userId

      console.log('User ID:', userId);
    } else {
      console.log('User ID not found in sessionStorage');
    }
    console.log('this.data.id:', this.data.id);
    this.get(userId)
  }

  get(userId: any) {
    this.service.viewUser(userId).subscribe(res => {
      this.data = res
    })
  }
}
