import { Routes } from "@angular/router";
import { DashbordComponent } from "./dashbord/dashbord.component";
import { FormDemandeComponent } from "./demande-rdv/form-demande/form-demande.component";
import { ListDemandeComponent } from "./demande-rdv/list-demande/list-demande.component";
import { PrivateComponent } from "./private.component";
import { isConnectGuard } from "../../core/guards/is-connect.guard";

export const PRIVATE_ROUTES :Routes = [

 {
        path: '',
        component:PrivateComponent,
        canActivateChild:[isConnectGuard],
        children:[
            {
                path:'',
                redirectTo:'dashbord'
                ,pathMatch:'full'

            },
            {
                path: 'dashbord',
                component:DashbordComponent
            },
            {
                path: 'form-demande-rdv',
                component:FormDemandeComponent
            },  
            {
                path: 'list-demande-rdv',
                component:ListDemandeComponent
            }

        ]
    }
];