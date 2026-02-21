import { Routes } from '@angular/router';
import { PrivateComponent } from './feacture/private/private.component';
import { isConnectGuard } from './core/guards/is-connect.guard';

export const routes: Routes = [

//private routes
    {
        path: 'private',
        canActivate: [isConnectGuard],
        loadChildren: () => 
        import('./feacture/private/private.route')
        .then(c => c.PRIVATE_ROUTES)
    },
   


//public routes

    {
        path: 'public',
        loadChildren: () => 
        import('./feacture/public/public.route')
        .then(c => c.PUBBLIC_ROUTES)
        
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

