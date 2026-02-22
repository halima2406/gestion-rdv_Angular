import { Observable } from "rxjs";
import { DemandeListRVResponseModel } from "../../../models/demande.model";
import { DemandeRVFilterModel } from "../../../models/demande.model";
import { InjectionToken } from "@angular/core";

export interface DemandeServiceInterface {
    getDemandeRV(filtre:DemandeRVFilterModel):Observable<DemandeListRVResponseModel>;
}

export const DEMANDE_SERVICE_TOKEN = new InjectionToken<DemandeServiceInterface>('DemandeServiceInterface');