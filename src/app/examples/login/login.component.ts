import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    
    constructor(private authentificationService: AuthentificationService, private router: Router) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    onLogin(user) {
        console.log(user);
        this.authentificationService.onLogin(user).subscribe(response => {
            console.log('Response: ', response);
            const jwt = response.headers.get('Authorization');
            this.authentificationService.saveToken(jwt);
            this.router.navigateByUrl('/');
        }, err => {
            console.log('Error AuthentificationService - onLogin: ', err);
        });
    }

}
