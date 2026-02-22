import { Component, Inject, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListRV, DemandeListRVResponseModel, DemandeRVFilterModel, SpecialiteMedicale, StatutDemande } from '../../models/demande.model';
import { CommonModule } from '@angular/common';
import { DemandeMockService } from '../service/demande.mock.service';
import { OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../service/interfaces/demande.interface.service';

@Component({
  selector: 'app-list-demande',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {


  //demandesResponse:undefined;
  demandesResponse?:DemandeListRVResponseModel;

  private subscription?:Subscription;

  filterDemandes: DemandeRVFilterModel = {
    specialite : '',
    statut: 'En Attente',
  };

  constructor(@Inject(DEMANDE_SERVICE_TOKEN) private demandeService: DemandeServiceInterface){}

  ngOnDestroy(): void {
  if (typeof window !== 'undefined') {
    alert("ListDemandeComponent détruit");
    }
  }

   
  private loadDemandes(): void {

    this.subscription=this.demandeService.getDemandeRV(this.filterDemandes).subscribe({
      next: (response:DemandeListRVResponseModel) => {
        this.demandesResponse = response;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des demandes :", error);
      },complete:()=>{
        console.log("Chargement des demandes terminé.");
      }
    });
  
  }

  ngOnInit(): void {
    this.loadDemandes();
  }

 
  onDestroy(): void {
    this.subscription?.unsubscribe();
  }


  onFilterStatutChange(){
    this.loadDemandes();
  }

  onFilterSpecialiteChange(){
    this.loadDemandes();
  }

  onPaginate(page:number){
    this.filterDemandes.page=page;
    this.loadDemandes();
  }

  desactivePrecedent():boolean{
    return !(this.demandesResponse!=undefined && this.demandesResponse.currentPage > 1);
  }

  desactiveSuivant():boolean{
    return !(this.demandesResponse!=undefined && this.demandesResponse.currentPage < (this.demandesResponse.totalPages || 0));
  }

  
}
