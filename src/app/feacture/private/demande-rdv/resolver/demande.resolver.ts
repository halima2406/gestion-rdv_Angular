import { ResolveFn } from '@angular/router';
import { DemandeRVFilterModel, DemandeListRVResponseModel } from '../../models/demande.model';
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../service/interfaces/demande.interface.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const demandeResolver: ResolveFn<DemandeListRVResponseModel|undefined> = (route, state) => {

  

  const demandeService = inject(DEMANDE_SERVICE_TOKEN) as DemandeServiceInterface;

  const filterDemandes: DemandeRVFilterModel = {
    specialite : '',
    statut: 'En Attente',
  };

  return demandeService.getDemandeRV(filterDemandes);
 
};