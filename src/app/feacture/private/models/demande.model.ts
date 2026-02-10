/*export enum StatutDemande {
    EN_ATTENTE = 'En Attente',
    ACCEPTEE = 'Acceptée',
    REFUSEE = 'Refusée'
   
  }

export enum SpecialiteMedicale {
    CARDIOLOGIE = 'Cardiologie',
    DERMATOLOGIE = 'Dermatologie',
    NEUROLOGIE = 'Neurologie',
    PEDIATRIE = 'Pédiatrie',
    ORTHOPEDIE = 'Orthopédie',
    GYNECOLOGIE = 'Gynécologie'
 }*/

import { Interface } from "readline";


export type SpecialiteMedicale =
    | 'Cardiologie'         
    | 'Dermatologie'        
    | 'Neurologie'          
    | 'Pédiatrie'           
    | 'Orthopédie'          
    | 'Gynécologie';

export type StatutDemande =     
    | 'En Attente'     
    | 'Acceptée'         
    | 'Refusée';


export interface DemandeListRV {
    id: number;
    dateDemande: string;
    statut: StatutDemande;
    heure: string;
    specialite: SpecialiteMedicale;
  }



export interface DemandeRVFilterModel {
    
    statut?: StatutDemande;
    specialite?: SpecialiteMedicale | '';
    page?: number;
    size?:  number;

}


export interface DemandeListRVResponseModel {
  data: DemandeListRV[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
  pages: number[];
  size: number;
}
