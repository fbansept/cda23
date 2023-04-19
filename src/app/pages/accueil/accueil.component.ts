import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  listeUtilisateur: Utilisateur[] = [];

  constructor(private serviceUtilisateur: UtilisateurService) {}

  ngOnInit() {
    this.serviceUtilisateur._utilisateurs.subscribe(
      (utilisateurs) => (this.listeUtilisateur = utilisateurs)
    );

    this.raffraichir();
  }

  raffraichir(): void {
    this.serviceUtilisateur.getUtilisateurs();
  }

  onDeleteUser(idUtilisateur: number | undefined) {
    if (idUtilisateur != undefined) {
      this.serviceUtilisateur
        .deleteUtilisateur(idUtilisateur)
        .subscribe((utilisateur) => this.raffraichir());
    }
  }
}
