import { ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { SecurityMockService } from './core/services/security.service.mock';
import { routes } from './app.routes';
import { DEMANDE_SERVICE_TOKEN } from './feacture/private/demande-rdv/service/interfaces/demande.interface.service';
import { DemandeMockService } from './feacture/private/demande-rdv/service/demande.mock.service';
import { SECURITY_SERVICE_TOKEN } from './core/services/interfaces/security.interface.service';

export const appConfig: ApplicationConfig = {
  providers:[
    provideRouter(routes), 
    {
      provide: DEMANDE_SERVICE_TOKEN,
      useClass: DemandeMockService
    },
    {
      provide: SECURITY_SERVICE_TOKEN,
      useClass: SecurityMockService
    }
  ]
};
