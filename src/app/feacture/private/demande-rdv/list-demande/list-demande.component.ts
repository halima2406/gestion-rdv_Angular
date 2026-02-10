import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRV, DemandeListRVResponseModel, DemandeRVFilterModel, SpecialiteMedicale, StatutDemande } from '../../models/demande.model';
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


  //demandesResponse:undefined;
  demandesResponse?:DemandeListRVResponseModel;
  filterDemandes: DemandeRVFilterModel = {
    specialite : '',
    statut: 'En Attente',
  };

  

  constructor(private demandeServive: DemandeService) { 
   
  }

  ngOnDestroy(): void {
  if (typeof window !== 'undefined') {
    alert("ListDemandeComponent détruit");
  }
}

  ngOnInit(): void {
    this.LoadDemandes();
  }

  private LoadDemandes(){
    this.demandesResponse=this.demandeServive.getDemandeRV(this.filterDemandes);
  }

  onFilterStatutChange(){
    this.LoadDemandes();
  }

  onFilterSpecialiteChange(){
    this.LoadDemandes();
  }

  onPaginate(page:number){
    this.filterDemandes.page=page;
    this.LoadDemandes();
  }

  desactivePrecedent():boolean{
    return !(this.demandesResponse!=undefined && this.demandesResponse.currentPage > 1);
  }

  desactiveSuivant():boolean{
    return !(this.demandesResponse!=undefined && this.demandesResponse.currentPage < (this.demandesResponse.totalPages || 0));
  }

  
}
