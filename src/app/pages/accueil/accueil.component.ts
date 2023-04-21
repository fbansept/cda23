import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ConnexionService } from 'src/app/services/connexion.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  listeUtilisateur: Utilisateur[] = [];
  isAdmin: boolean = false;

  constructor(
    private serviceUtilisateur: UtilisateurService,
    private connexionService: ConnexionService
  ) {}

  ngOnInit() {
    this.serviceUtilisateur._utilisateurs.subscribe(
      (utilisateurs) => (this.listeUtilisateur = utilisateurs)
    );

    this.connexionService._utilisateurConnecte.subscribe(
      (utilisateur) => (this.isAdmin = utilisateur?.role.nom == "ROLE_ADMINISTRATEUR")
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
