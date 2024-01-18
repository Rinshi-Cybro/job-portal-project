import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authService: ApiService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.userGuard()) {
      return true;
    } else {
      this.router.navigate(['adminhome']); 
      return false;
    }
    
  }
  
}
