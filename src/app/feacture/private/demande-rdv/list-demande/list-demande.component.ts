import { Component, ChangeDetectorRef, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DemandeListRVResponseModel, DemandeRVFilterModel } from '../../models/demande.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../../../../shared/components/alert/alert.component';
import { PaginationComponent } from "../../../../shared/components/pagination/pagination.component";
import { DEMANDE_SERVICE_TOKEN, DemandeServiceInterface } from '../service/interfaces/demande.interface.service';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AlertComponent, PaginationComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit, OnDestroy {

  demandesResponse?: DemandeListRVResponseModel;
  private subscription?: Subscription;
  isLoading = false;

  filterDemandes: DemandeRVFilterModel = {
    specialite: '',
    statut: 'En Attente',
  };

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    @Inject(DEMANDE_SERVICE_TOKEN) private demandeService: DemandeServiceInterface
  ) {}

  ngOnInit(): void {
    this.demandesResponse = this.route.snapshot.data['demandes'];
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  
  private loadDemandes(): void {
    this.isLoading = true;
    this.subscription?.unsubscribe(); 
    this.subscription = this.demandeService.getDemandeRV(this.filterDemandes).subscribe({
      next: (data) => {
        this.demandesResponse = data;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  onFilterStatutChange() { this.loadDemandes(); }
  onFilterSpecialiteChange() { this.loadDemandes(); }

  onPaginate(page: number) {
    this.filterDemandes.page = page;
    this.loadDemandes();
  }

  desactivePrecedent(): boolean {
    return !(this.demandesResponse != undefined && this.demandesResponse.currentPage > 1);
  }

  desactiveSuivant(): boolean {
    return !(this.demandesResponse != undefined && this.demandesResponse.currentPage < (this.demandesResponse.totalPages || 0));
  }
}