import { Component } from '@angular/core';
import { ConnexionService } from './services/connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private connexionService: ConnexionService) {}

  onDeconnexion() {
    this.connexionService.deconnexion();
  }
}
