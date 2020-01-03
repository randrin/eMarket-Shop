import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private loginUrl = window['baseUrlUser'] + '/login';

  public username;
  public password;
  public jwt;
  public roles = [];

  constructor(private router: Router, private http: HttpClient) { }

  onLogin(user) {
    // Observe pour ne pas convertir la response en JSon, ma me donner la response en http
    return this.http.post(this.loginUrl, user, {observe: 'response'});
  }

  onLogout() {
    localStorage.removeItem('token');
    this.initCredentials();
  }

  saveToken(jwt) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.retrieveInfosUser();
  }

  retrieveInfosUser() {
    const jwtHelper = new JwtHelperService();
    const decodeToken = jwtHelper.decodeToken(this.jwt);
    console.log('DecoToken: ', decodeToken);
    this.username = decodeToken.sub;
    this.roles = decodeToken.roles;
  }

  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }

  isAuthentificated() {
    return this.roles && (this.isAdmin() || this.isUser());
  }

  retrieveToken() {
    this.jwt = localStorage.getItem('token');
    this.retrieveInfosUser();
  }

  initCredentials() {
    this.username = '';
    this.password = '';
    this.roles = [];
    this.jwt = '';
  }
}
