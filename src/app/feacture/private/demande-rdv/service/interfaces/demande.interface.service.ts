import { Observable } from "rxjs";
import { DemandeListRVResponseModel } from "../../../models/demande.model";
import { DemandeRVFilterModel } from "../../../models/demande.model";

export interface DemandeServiceInterface {
    getDemandeRV(filtre:DemandeRVFilterModel):Observable<DemandeListRVResponseModel>;
}