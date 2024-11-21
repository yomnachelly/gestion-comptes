import { Component,OnInit } from '@angular/core';
import { compte } from '../models/compte.model';
import { CompteService } from '../services/compte.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrl: './update-compte.component.css'
})
export class UpdateCompteComponent implements OnInit{
  currentcompte = new compte();

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private CompteService: CompteService
  ) {}

 /* updatecompte() {
    this.CompteService.updatecompte(this.currentcompte).subscribe(
      (prod: compte) => {
        this.router.navigate(['comptes']);
      },
      error => {
        alert("Problème lors de la modification !");
      }
    );
  }

  ngOnInit() {
    this.CompteService.consultercompte(this.activatedRoute.snapshot.params['code'])
      .subscribe((prod: compte) => {
        this.currentcompte = prod;
      });
  }*/
      updatecompte() {
        console.log("Données à mettre à jour :", this.currentcompte);
        if (!this.currentcompte.code) {
          alert("Le code du compte est manquant !");
          return;
        }
        this.CompteService.updatecompte(this.currentcompte).subscribe(
          (prod: compte) => {
            this.router.navigate(['comptes']);
          },
          error => {
            console.error("Erreur lors de la modification :", error);
            alert("Problème lors de la modification !");
          }
        );
      }
      ngOnInit() {
        const code = this.activatedRoute.snapshot.params['code'];
        console.log("Code du compte à consulter :", code);
        this.CompteService.consultercompte(code)
          .subscribe((prod: compte) => {
            this.currentcompte = prod;
            console.log("Compte récupéré :", this.currentcompte);
            alert("Compte récupéré")
          }, error => {
            console.error("Erreur lors de la récupération du compte :", error);
          });
      }
}
