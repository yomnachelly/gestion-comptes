import { Component } from '@angular/core';
import { compte } from '../models/compte.model';
import { CompteService } from '../services/compte.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrl: './list-comptes.component.css'
})
export class ListComptesComponent {
  comptes!: compte[]; 

  constructor(private CompteService : CompteService , private router: Router) {} // Injection de Router

  ngOnInit(): void {
    this.CompteService .listeCompte().subscribe(prods => {
      console.log(prods);
      this.comptes = prods;
    });
  }
  
  supprimercompte(p: compte)
{
let conf = confirm("Etes-vous sûr ?"); if (conf)
this.CompteService .supprimercompte(p.code).subscribe(() => { console.log("produit supprimé"); this.SuprimercompteDuTableau(p);
});

}
SuprimercompteDuTableau(prod : compte) { this.comptes.forEach((cur, index) => { if(prod.code=== cur.code) {
  this.comptes.splice(index, 1);
  }
  });
  }
  

}
