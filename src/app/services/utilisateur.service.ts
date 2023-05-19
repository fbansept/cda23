import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageService } from './image.service';
import { Utilisateur } from '../models/utilisateur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  public _utilisateurs: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, private imageService: ImageService) {}

  public getUtilisateurs() {
    this.http
      .get<Utilisateur[]>(environment.serverUrl + '/utilisateurs')
      .subscribe((utilisateurs: Utilisateur[]) => {
        for (let utilisateur of utilisateurs) {
          this.imageService.chargementImageProfil(utilisateur);
        }

        this._utilisateurs.next(utilisateurs);
      });
  }

  public getUtilisateur(id: number): Observable<any> {
    return this.http.get(environment.serverUrl + '/utilisateur/' + id);
  }

  public deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(environment.serverUrl + '/admin/utilisateur/' + id);
  }

  public editionUtilisateur(formData: FormData): Observable<any> {
    return this.http.post(
      environment.serverUrl + '/admin/utilisateur',
      formData
    );
  }
}
