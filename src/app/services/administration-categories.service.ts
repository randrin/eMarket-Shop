import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrationCategoriesService {

  public prefix = 'Bearer ';
  public headers = new HttpHeaders({'authorization': this.prefix + this.authentificationService.jwt})

  constructor(
    public router: Router, private http: HttpClient, private authentificationService: AuthentificationService) {
  }

  onDeleteCategorie(category) {
    const headers = new HttpHeaders({'authorization': this.prefix + this.authentificationService.jwt})
    return this.http.delete(category, {'headers': headers});
  }

  onSaveCategory(category, url) {
    return this.http.post(url, category, {'headers': this.headers});
  }

  onEditCategory(category, url) {
    return this.http.patch(url, category, {'headers': this.headers});
  }
}
