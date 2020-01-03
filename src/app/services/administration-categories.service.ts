import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationCategoriesService {

  constructor(
    public router: Router, private http: HttpClient, private authentificationService: AuthentificationService) {
  }

  deleteCategorie(category) {
    const prefix = 'Bearer ';
    const headers = new HttpHeaders({'authorization': prefix + this.authentificationService.jwt})
    return this.http.delete(category, {'headers': headers});
  }
}
