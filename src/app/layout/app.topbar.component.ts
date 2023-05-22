import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];
    private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;
  
    eventBusSub?: Subscription;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private storageService: StorageService,
        private authService: AuthService,
        private eventBusService: EventBusService) { }
        ngOnInit(): void {
            this.isLoggedIn = this.storageService.isLoggedIn();
        
            if (this.isLoggedIn) {
              const user = this.storageService.getUser();
              this.roles = user.roles;
        
              this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
              this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
        
              this.username = user.username;
            }
        
            this.eventBusSub = this.eventBusService.on('logout', () => {
              this.logout();
            });
  
        }
        logout(): void {
            this.authService.logout().subscribe({
              next: res => {
                console.log(res);
                this.storageService.clean();
        
                window.location.reload();
              },
              error: err => {
                console.log(err);
              }
            });
          }
}
