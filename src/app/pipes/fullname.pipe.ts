import { Pipe, PipeTransform } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(utilisateur: Utilisateur, ...args: string[]): string {
    return utilisateur.prenom + ' ' + utilisateur.nom.toUpperCase();
  }
}
