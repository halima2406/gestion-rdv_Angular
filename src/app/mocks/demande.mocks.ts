import { DemandeListRV, SpecialiteMedicale, StatutDemande } from "../feacture/private/models/demande.model";

export const MOCK_DEMANDES : DemandeListRV[]= [
    {
      id: 1,
      dateDemande: '2024-07-01',
      heure: '10:00',
      statut: 'Acceptée',
      specialite: 'Cardiologie'
    },
    {
      id: 2,
      dateDemande: '2024-07-05',
      heure: '14:00',
      statut: 'En Attente',
      specialite: 'Dermatologie'
    },
    {
      id: 3,
      dateDemande: '2024-07-10',
      heure: '09:30',
      statut: 'Refusée',
      specialite: 'Neurologie'
    },
    {
      id: 4,
      dateDemande: '2024-07-10',
      heure: '09:30',
      statut: 'Refusée',
      specialite: 'Neurologie'
    },
    {
      id: 5,
      dateDemande: '2024-07-10',
      heure: '09:30',
      statut: 'Refusée',
      specialite: 'Neurologie'
    },
    {
      id: 6,
      dateDemande: '2024-07-01',
      heure: '10:00',
      statut: 'En Attente',
      specialite: 'Cardiologie'
    }
  ];