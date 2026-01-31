export enum StatutDemande {
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
 }

export interface DemandeListRV {
    id: number;
    dateDemande: string;
    statut: StatutDemande;
    heure: string;
    specialite: SpecialiteMedicale;
  }