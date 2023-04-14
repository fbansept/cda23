import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent {

  compteur: number = 0

  public onClic(): void {
    this.compteur ++
  }

}
