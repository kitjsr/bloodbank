import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { StorageService } from '../../../_services/storage.service';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./style.css']
})
export class LandingComponent implements OnInit {
    form: any = {
      username: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
  
    constructor( private authService: AuthService, private storageService: StorageService,public layoutService: LayoutService, public router: Router) { }
  
    // constructor() { }
    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      }
    }
  
    onSubmit(): void {
      const { username, password } = this.form;
  
      this.authService.login(username, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          this.reloadPage();
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
  
    reloadPage(): void {
      // window.location.reload();
      this.router.navigate(['/dashboard']);
      // if(Object.keys(this.currentUser).length===0){
      //   this.router.navigate(['/landing']);
      // }
    }
  }
  