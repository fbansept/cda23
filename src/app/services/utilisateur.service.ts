import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  public _utilisateurs: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  public getUtilisateurs() {
    this.http
      .get('http://localhost:8080/utilisateurs')
      .subscribe((utilisateurs: any) => {
        this._utilisateurs.next(utilisateurs);
      });
  }

  public getUtilisateur(id: number): Observable<any> {
    return this.http.get(
      'http://localhost:8080/utilisateur/' + id
    );
  }

  public deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/utilisateur/' + id);
  }

  public editionUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post('http://localhost:8080/utilisateur', utilisateur);
  }
}
