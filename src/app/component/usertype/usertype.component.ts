import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { Usertype } from '../usertype/usertype';
import { UsertypeService } from '../../services/usertype.service';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../_services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
    templateUrl: './Usertype.component.html',
    providers: [MessageService],
})
export class UsertypeComponent implements OnInit {
    changeUsertypeDialogBox: boolean = false;
    submitted: boolean = false;
    usertypeDialog: boolean = false;
    type: any[] = [];

    rowsPerPageOptions = [5, 10, 20];
    currentUser: any;

    usertypes: Usertype[] = [];
    usertype: Usertype = {};
    ktype:any={};
    constructor(
        private messageService: MessageService,
        private userService: UserService,
        private storageService: StorageService,
        private router: Router,
        private authService: AuthService,
        private usertypeService: UsertypeService
    ) {}

    ngOnInit() {
        // Fetch Login User Details
        this.currentUser = this.storageService.getUser();
        // Check User login or not
        // If user not login then redirect to login page
        if (Object.keys(this.currentUser).length === 0) {
            this.router.navigate(['/landing']);
        }

        // If login user is Donar then redirect to Dashboard
        if (this.currentUser.roles[0] === 'ROLE_USER') {
            this.router.navigate(['/dashboard']);
        }

        this.retrieveUsers();

        this.type = [
            { label: 'Donar (user)', value: '1' },
            { label: 'Blood Bank (moderator)', value: '2' },
        ];
    }

    retrieveUsers(): void {
        this.userService.getAll().subscribe(
            (data) => {
                this.usertypes = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    saveUserType() {
        this.submitted = true;
        
        if (this.usertype.userrole?.trim()) {
        //     console.log('Hello');
        // console.log(this.usertype);
        // console.log(this.usertype.userrole);
            this.ktype.roleId=this.usertype.userrole;
                console.log('update test');
                this.usertypeService
                    .update(this.usertype.id, this.ktype)
                    .subscribe(
                        (response) => {
                            console.log(response);
                            this.ngOnInit();
                        },
                        (error) => {
                            console.log(error);
                        }
                    );

                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'User Type Successfully Updated',
                    life: 3000,
                });
        }
        this.usertypeDialog=false;
    }

    

    hideDialog() {
        this.usertypeDialog = false;
        this.submitted = false;
    }
    editUsertype(usertype: Usertype) {
        this.usertype = { ...usertype };
        this.usertypeDialog = true;
    }
    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.usertypes.length; i++) {
            if (this.usertypes[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}
