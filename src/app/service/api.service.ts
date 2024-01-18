import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:3000/user'
  mesUrl='http://localhost:3000/message'
  vacUrl='http://localhost:3000/vacancy'
  annUrl='http://localhost:3000/announcement'

  getAll(){
    return this.http.get(this.apiUrl)
  }

  getByCode(code:any){
    return this.http.get(this.apiUrl+'/'+code)
  }

  ProceedRegister(data:any){
    return this.http.post(this.apiUrl,data)
  }

  UpdateUser(data:any,code:any){
    return this.http.put(this.apiUrl,data)
  }

  


  isloggedIn(){
    return sessionStorage.getItem('username')!=null
  }

  adminLoggedIn(){
    return sessionStorage.getItem('userrole')==='admin'
  }

  userGuard(){
    return sessionStorage.getItem('userrole')==='user'||''
  }

  GetUserRole(){
    return (sessionStorage.getItem('userrole') ?? '').toString();
  }

  GetAllRole(){
    return this.http.get('http://localhost:3000/role')
  }

  viewUser(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  delete(id:any){
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }


  

  // login(data:any){
  //   this.http.post('http://localhost:3000/login',data).subscribe((result:any)=>{
  //     console.warn(result)
  //     localStorage.setItem("id",result.id)
  //   })
  // }


  post(data:any){
    return this.http.post(this.mesUrl,data)
  }

  get(){
    return this.http.get(this.vacUrl)
  }

  getFeedback(){
    return this.http.get(this.mesUrl)
  }


  postAnnouncement(data:any){
    return this.http.post(this.annUrl,data)
  }

  
  getAnnouncement(){
    return this.http.get(this.annUrl)
  }

  postjob(data:any){
    return this.http.post(this.vacUrl,data)
  }

  
}
