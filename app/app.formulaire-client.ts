import { Component} from '@angular/core';
import { CLIENTS }    from './clients';
import { Client }    from './client';

@Component({
  selector: 'form-client',
  templateUrl: 'app/app.formulaire-client.html'
})

export class FormClient{
    clients =  CLIENTS;
    client:Client;

    addClient(first:string, last:string, _email:string) {
        let id = this.clients.length + 1;
        let newClient = new Client(id,first,last,_email,true);
		this.clients.push(newClient);
	  }
}