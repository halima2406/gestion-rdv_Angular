import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PatientComponent } from "./patient/patient.component";
import { PublicComponent } from "./public.component";

export const PUBBLIC_ROUTES:Routes = [

    {
        path: '',
        component:PublicComponent,
        children:[
            {
                path:'',
                redirectTo:'login'
                ,pathMatch:'full'
            },
            {
                path:'create-patient',
                loadComponent: () => 
                import('./patient/patient.component')
                .then(c => c.PatientComponent)
            },
            {
                path:'login',
                loadComponent: () => 
                import('./login/login.component')
                .then(c => c.LoginComponent)
            }

        ]
    }

];