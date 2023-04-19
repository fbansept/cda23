import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-edition-utilisateur',
  templateUrl: './edition-utilisateur.component.html',
  styleUrls: ['./edition-utilisateur.component.scss'],
})
export class EditionUtilisateurComponent {
  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    nom: ['', [Validators.required, Validators.minLength(3)]],
    prenom: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private serviceUtilisateur: UtilisateurService
  ) {}

  idUtilisateur?: number;
  codeRetour: number = 0;
  messageErreur: string = '';

  ngOnInit() {
    this.route.params.subscribe((parametres) => {
      this.idUtilisateur = parametres['id'];

      if (this.idUtilisateur != null) {
        this.serviceUtilisateur.getUtilisateur(this.idUtilisateur).subscribe({
          next: (utilisateur: Utilisateur) => {
            this.formulaire.get('email')?.setValue(utilisateur.email);
            this.formulaire.get('nom')?.setValue(utilisateur.nom);
            this.formulaire.get('prenom')?.setValue(utilisateur.prenom);
          },
          error: (erreurRequete) => {
            if (erreurRequete.status === 404) {
              this.codeRetour = 404;
            } else {
              this.codeRetour = 500;
              this.messageErreur = erreurRequete.message;
            }
          },
        });
      }
    });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      const utilisateur: Utilisateur = this.formulaire.value;
      utilisateur.id = this.idUtilisateur;

      this.serviceUtilisateur
        .editionUtilisateur(utilisateur)
        .subscribe((resultat) => this.router.navigateByUrl('accueil'));
    }
  }
}
