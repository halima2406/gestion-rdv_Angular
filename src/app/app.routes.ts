import { Routes } from '@angular/router';
import { DashbordComponent } from './feacture/dashbord/dashbord.component';
import { DemandeRdvComponent } from './feacture/demande-rdv/demande-rdv.component';
import { ListDemandeComponent } from './feacture/demande-rdv/list-demande/list-demande.component';
import { FormDemandeComponent } from './feacture/demande-rdv/form-demande/form-demande.component';

export const routes: Routes = [
    {
        path: 'dashbord',
        component:DashbordComponent
    },
    /*{
        path: 'demande-rdv',
        component:DemandeRdvComponent
    }*/
    {
        path: 'form-demande-rdv',
        component:FormDemandeComponent
    }
];
