import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ApiService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isloggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
    
  }
  
}
