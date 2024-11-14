import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { compte } from '../models/compte.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root',
})
export class CompteService {
  apiURL: string = 'http://localhost:8787/banque/client'; 

  constructor(private http: HttpClient) {}
// Méthode pour obtenir la liste des produits via une requête HTTP GET
listeCompte(): Observable<compte[]> {
  return this.http.get<compte[]>(this.apiURL);
}

// Liste locale des produits pour le moment
comptes: compte[] = [
  { code:1,nom:"ALI",prenom:"ALI", dateCreation: new Date("14/11/2024"),solde:2000.0 },
  { code:2,nom:"Asma",prenom:"Asma", dateCreation: new Date("14/11/2024"),solde:1000.0 },
  { code:3,nom:"Kais",prenom:"Kais", dateCreation: new Date("11/11/2024"),solde:1500.0 }
];

listCompte(): compte[] {
  return this.comptes;
}

ajouterCompte( prod: compte):Observable<compte>{
  return this.http.post<compte>(this.apiURL, prod, httpOptions);
  }
   

  supprimercompte(code : number) {
    const url = `${this.apiURL}/${code}`;
    return this.http.delete(url, httpOptions);
    }
    

    consultercompte(code: number): Observable<compte> { const url = `${this.apiURL}/${code}`;
    return this.http.get<compte>(url);
    }
    

trierProduits() {
  this.comptes.sort((n1, n2) => n1.code - n2.code);
}

updatecompte(prod :compte) : Observable<compte>
{
return this.http.put<compte>(this.apiURL, prod, httpOptions);

}
 
}