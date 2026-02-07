import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Scoundrel } from './scoundrel/scoundrel';

export const routes: Routes = [
    {
        path: '',
        component: Start,
      },
      {
        path: 'scoundrel',
        component: Scoundrel,
      }
];
