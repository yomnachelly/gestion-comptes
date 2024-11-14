
import { Component } from '@angular/core';
import { compte } from '../models/compte.model';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrl: './add-compte.component.css'
})
export class AddCompteComponent {
  newcompte = new compte();

  constructor(private CompteService: CompteService, private router: Router) { } // Injection du Router

  addcompte() {
    this.CompteService.ajouterCompte(this.newcompte).subscribe(prod => { 
      console.log(prod);
      this.router.navigate(['comptes']); // Navigation vers la liste des produits après ajout
    });
  }
}
