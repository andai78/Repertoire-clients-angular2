  import { NgModule }       from '@angular/core';
  import { BrowserModule }  from '@angular/platform-browser';
  import { RouterModule }   from '@angular/router';
  import { FormsModule }    from '@angular/forms';

  import { AppComponent }   from './app.component';
  import { Accueil }   from './app.accueil';
  import { FormClient }   from './app.formulaire-client';
  import { Details }   from './app-details';
 
  @NgModule({
    imports: [ BrowserModule,FormsModule,
    RouterModule.forRoot([
      {
        path: '', 
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        component: Accueil
      },
      {
        path: 'ajout',
        component: FormClient
      },
      {
        path: 'details',
        component: Details
      }
    ])],
    declarations: [AppComponent,Accueil,FormClient,Details], 
    bootstrap: [ AppComponent ]
  })
  export class AppModule {
  }

