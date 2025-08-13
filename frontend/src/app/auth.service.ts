import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/user'; 

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  onSubmit(username: string, password: string) {
    this.login(username, password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); 
        this.router.navigate(['/punk-list']); 
      },
      error: () => {
        console.error('Usuário ou senha incorretos');
      }
    });
  }
}
