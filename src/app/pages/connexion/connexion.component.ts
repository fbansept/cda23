import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  onSubmit(): void {
    if (this.formulaire.valid) {
      this.http
        .post(
          'http://localhost:8080/connexion', 
          this.formulaire.value,
          {responseType: 'text'}
        )
        .subscribe((jwt) => {
          localStorage.setItem("jwt", jwt)
        });
    }
  }
}
