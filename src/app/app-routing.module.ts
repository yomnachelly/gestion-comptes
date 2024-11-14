import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';

const routes: Routes = [
   { path: 'list-compte', component: ListComptesComponent },
  { path: 'add-compte', component: AddCompteComponent },
  
  { path: '', redirectTo: '/list-compte', pathMatch: 'full' },
  { path: 'update-compte/:id', component: UpdateCompteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
