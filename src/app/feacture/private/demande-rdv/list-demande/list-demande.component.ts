import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRV, SpecialiteMedicale, StatutDemande } from '../../models/demande.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink,CommonModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent {
  demandes:DemandeListRV[] = [
    { id: 1,specialite:SpecialiteMedicale.CARDIOLOGIE, dateDemande: '2024-07-01', heure: '10:00', statut: StatutDemande.EN_ATTENTE},
    { id: 2,specialite:SpecialiteMedicale.DERMATOLOGIE, dateDemande: '2024-07-05', heure: '14:30', statut:StatutDemande.ACCEPTEE },
    { id: 3,specialite:SpecialiteMedicale.GYNECOLOGIE, dateDemande: '2024-07-10', heure: '09:15', statut: StatutDemande.REFUSEE },
    { id: 4,specialite:SpecialiteMedicale.CARDIOLOGIE, dateDemande: '2024-07-01', heure: '10:00', statut: StatutDemande.EN_ATTENTE},
    { id: 5,specialite:SpecialiteMedicale.DERMATOLOGIE, dateDemande: '2024-07-05', heure: '14:30', statut:StatutDemande.ACCEPTEE }
  ];

  
}
