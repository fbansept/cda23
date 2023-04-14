import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  listeUtilisateur:any[] = []

  constructor (private http: HttpClient) {}

  ngOnInit() {
   this.raffraichir()
  }

  raffraichir (): void {
    this.http
        .get("http://localhost:8080/utilisateurs")
        .subscribe((utilisateurs:any) => 
          this.listeUtilisateur = utilisateurs)
  }

  onDeleteUser(idUtilisateur: number) {
    this.http
        .delete("http://localhost:8080/utilisateur/" + idUtilisateur)
        .subscribe(utilisateur => this.raffraichir())
  }

}
