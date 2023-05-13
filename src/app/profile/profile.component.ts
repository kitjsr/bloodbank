import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private storageService: StorageService,private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    // console.log(this.currentUser);
    if(Object.keys(this.currentUser).length===0){
      this.router.navigate(['/landing']);
    }
  }
}
