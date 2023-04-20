import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConnexionService {

  

  constructor(private http: HttpClient, private router: Router) {}

  connexion(utilisateur: Utilisateur): Observable<string> {
    return this.http.post('http://localhost:8080/connexion', utilisateur, {
      responseType: 'text',
    });
  }

  deconnexion() {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/connexion');
  }
}
