import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';

import { UserService } from '../_services/user.service';
import { Router } from "@angular/router";
@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    modelUser: any[] = [];
    private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;

    currentUser: any;
    donar="ROLE_USER";
    bloodbank="ROLE_MODERATOR";
    admin="ROLE_ADMIN";

    eventBusSub?: Subscription;

    constructor(
        public layoutService: LayoutService,
        private storageService: StorageService,
        private authService: AuthService,
        private eventBusService: EventBusService,
        private userService: UserService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.isLoggedIn = this.storageService.isLoggedIn();

        if (this.isLoggedIn) {
            const user = this.storageService.getUser();
            this.roles = user.roles;

            // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.username = user.username;
        }
        
        // Fetch Login User Details
        this.currentUser = this.storageService.getUser();
        // Check User login or not
        // If user not login then redirect to login page
        if(Object.keys(this.currentUser).length===0){
            this.router.navigate(['/landing']);
          }
        
       
        // If login user is Donar then redirect to Dashboard
        if(this.currentUser.roles[0]==="ROLE_USER"){
            this.router.navigate(['/dashboard']);
          }
        // this.eventBusSub = this.eventBusService.on('logout', () => {
        //     this.logout();
        // });

        this.model = [
          {
              label: 'Home',
          },
          {
              items: [
                  {
                      label: 'Dashboard',
                      icon: 'pi pi-fw pi-home',
                      routerLink: ['/dashboard'],
                  },
                  {
                      label: 'Donars',
                      icon: 'pi pi-fw pi-users',
                      routerLink: ['/donars'],
                  },
                  {
                      label: 'Blood Bank Directory',
                      icon: 'pi pi-fw pi-home',
                      routerLink: ['/directorys'],
                  },
                  {
                      label: 'Blood Stocks Availability',
                      icon: 'pi pi-fw pi-home',
                      routerLink: ['/stocks'],
                  },
                  {
                      label: 'Donation',
                      icon: 'pi pi-fw pi-home',
                      routerLink: ['/donation'],
                  },
                  {
                      label: 'Donation Report',
                      icon: 'pi pi-fw pi-home',
                      routerLink: ['/donationreport'],
                  },
              ],
          },
      ];
      this.modelUser = [
        {
            label: 'Home',
        },
        {
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/dashboard'],
                },
                
                {
                    label: 'History',
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/history'],
                },
            ],
        },
    ];
    }
    // logout(): void {
    //     this.authService.logout().subscribe({
    //         next: (res) => {
    //             console.log(res);
    //             this.storageService.clean();

    //             window.location.reload();
    //         },
    //         error: (err) => {
    //             console.log(err);
    //         },
    //     });
    // }
}
