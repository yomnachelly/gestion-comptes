import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    ListComptesComponent,
    AddCompteComponent,
    UpdateCompteComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
