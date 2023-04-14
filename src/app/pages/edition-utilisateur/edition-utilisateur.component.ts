import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edition-utilisateur',
  templateUrl: './edition-utilisateur.component.html',
  styleUrls: ['./edition-utilisateur.component.scss']
})
export class EditionUtilisateurComponent {

  formulaire: FormGroup = this.formBuilder.group({
    email: ["",[Validators.email,Validators.required]],
    nom: ["",[Validators.required, Validators.minLength(3)]],
    prenom: ["",[Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
  ){}

  onSubmit(){
    if(this.formulaire.valid) {
      this.http
          .post("http://localhost:8080/utilisateur",this.formulaire.value)
          .subscribe(resultat => this.router.navigateByUrl("accueil"))
    }
  }

}
