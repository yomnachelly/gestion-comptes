import { Component,OnInit } from '@angular/core';
import { compte } from '../models/compte.model';
import { CompteService } from '../services/compte.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrl: './update-compte.component.css'
})
export class UpdateCompteComponent {
  currentcompte = new compte();

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private CompteService: CompteService
  ) {}

  updatecompte() {
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
  }
}
