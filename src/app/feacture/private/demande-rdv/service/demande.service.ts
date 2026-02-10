import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '@mocks';
import { DemandeListRV, DemandeListRVResponseModel, DemandeRVFilterModel } from '../../models/demande.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor() { }

  public getDemandeRV(filtre:DemandeRVFilterModel):DemandeListRVResponseModel{

    setTimeout(() => {
      console.log("------Appel du backend--------");
    }, 5000);


    let demandes=[...MOCK_DEMANDES];
    if (filtre.statut) {
      demandes = demandes.filter(d => d.statut === filtre.statut);
    }

    if (filtre.specialite) {
      demandes = demandes.filter(d => d.specialite === filtre.specialite);
    }

    const page = filtre.page || 1;
    const size = filtre.size || environment.limit || 5 ;

    const startIndex = (page-1)*size;
    const endIndex = startIndex+size;

    const totalPages = Math.ceil(demandes.length / size);


    const pages: number[] = [];
    for (let index = 1; index <= totalPages; index++) {
      pages.push(index);
      
    }

    const demandesByPage= demandes.slice(startIndex,endIndex);

   

    return {
      data: demandesByPage,
      totalPages: totalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages : pages,
      size:size
    };
    
  }
}
