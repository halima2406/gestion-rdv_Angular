import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mocks';
import { DemandeListRV, DemandeRVFilterModel } from '../../models/demande.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }

  public getDemandeRV(filtre:DemandeRVFilterModel):DemandeListRV[]{
    let demandes=[...MOCK_DEMANDES];
    if (filtre.statut) {
      demandes = demandes.filter(d => d.statut === filtre.statut);
    }

    if (filtre.specialite) {
      demandes = demandes.filter(d => d.specialite === filtre.specialite);
    }

    return demandes;
    
  }
}
