import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private router: Router,
    private route: ActivatedRoute
    ) {}

   login(loginForm: any) {
    console.log('Tentative de connexion');
    this.setUser({email : loginForm.email, password : loginForm.password});
    // On récupère l'url de redirection
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';
    // On accède à la page souhaitée
    this.router.navigate([redirectUrl]);
  }

  logout() {
    console.log('Tentative de déconnexion');
    this.clearUser();
    this.router.navigate(['/login']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem('user');
  }
}
