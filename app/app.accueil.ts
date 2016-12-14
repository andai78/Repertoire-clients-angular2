import { Component} from '@angular/core';
import { CLIENTS }    from './clients';
import { Client }    from './client';

@Component({
  selector: 'accueil',
  templateUrl: 'app/app.accueil.html'
})

export class Accueil{
    clients =  CLIENTS;
    client:Client;
}