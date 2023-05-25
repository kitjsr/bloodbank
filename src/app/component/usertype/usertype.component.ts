import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Usertype } from '../usertype/usertype';
import { DonarService } from '../../services/donar.service';
import { UsertypeService } from '../../services/usertype.service';
import { UserService } from '../../_services/user.service';
import { StorageService } from '../../_services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
    templateUrl: './Usertype.component.html',
    providers: [MessageService],
})
export class UsertypeComponent implements OnInit {
    usertypeDialog: boolean = false;
    submitted: boolean = false;
    type: any[] = [];

    rowsPerPageOptions = [5, 10, 20];
    currentUser: any;

    usertypes: Usertype[] = [];
    usertype: Usertype = {};

    constructor(
        private messageService: MessageService,
        private donarService: DonarService,
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

        this.retrieveUsertypes();

        this.type = [
            { label: 'Donar', value: '1' },
            { label: 'Blood Bank', value: '2' },
        ];
    }

    retrieveUsertypes(): void {
        this.usertypeService.getAll().subscribe(
            (data) => {
                this.usertypes = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    changeUserType() {
        this.submitted = true;

        if (this.usertype.type?.trim()) {
            console.log('Hello');
            // if (this.usertype.id) {
            //     console.log('update test');
            //     this.donarService
            //         .update(this.usertype.id, this.usertype)
            //         .subscribe(
            //             (response) => {
            //                 console.log(response);
            //                 this.ngOnInit();
            //             },
            //             (error) => {
            //                 console.log(error);
            //             }
            //         );

            //     this.messageService.add({
            //         severity: 'success',
            //         summary: 'Successful',
            //         detail: 'Donar Successfully Updated',
            //         life: 3000,
            //     });
            // } else {
            // }
        }
    }
    hideDialog() {
        // this.subscribeDialogBox = false;
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
