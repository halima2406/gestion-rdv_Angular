import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRV, DemandeRVFilterModel, SpecialiteMedicale, StatutDemande } from '../../models/demande.model';
import { CommonModule } from '@angular/common';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mocks';
import { DemandeService } from '../service/demande.service';
import { OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {


  demandes:DemandeListRV[]=[];
  filterDemandes: DemandeRVFilterModel = {
    specialite : '',
    statut: 'En Attente',
  };

  

  constructor(private demandeServive: DemandeService) { 
   
  }

  ngOnInit(): void {
    this.demandes=this.demandeServive.getDemandeRV(this.filterDemandes);
  }

  onFilterStatutChange(){
    this.demandes=this.demandeServive.getDemandeRV(this.filterDemandes);
  }

  
}
