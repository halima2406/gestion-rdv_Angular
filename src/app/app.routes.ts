import { Routes } from '@angular/router';
import { DashbordComponent } from './feacture/private/dashbord/dashbord.component';
import { ListDemandeComponent } from './feacture/private/demande-rdv/list-demande/list-demande.component';
import { FormDemandeComponent } from './feacture/private/demande-rdv/form-demande/form-demande.component';
import { PatientComponent } from './feacture/public/patient/patient.component';
import { LoginComponent } from './feacture/public/login/login.component';
import { PublicComponent } from './feacture/public/public.component';
import { PrivateComponent } from './feacture/private/private.component';

export const routes: Routes = [

//private routes
    {
        path: 'private',
        component:PrivateComponent,
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
    },


//public routes
    {
        path: 'public',
        component:PublicComponent,
        children:[
            {
                path:'',
                redirectTo:'login'
                ,pathMatch:'full'
            },
            {
                path:'create-patient',
                component:PatientComponent
            },
            {
                path:'login',
                component:LoginComponent
            }

        ]
    },
    {
        path:'',
        redirectTo:'/public',
        pathMatch:'full'
    }
    ,{
        path:'**',
        redirectTo:'/public/login'

       
    }
   
]

