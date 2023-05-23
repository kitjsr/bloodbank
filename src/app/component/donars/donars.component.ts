import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Donar } from './donar';
import { DonarService } from '../../services/donar.service';
import { UserService } from '../../_services/user.service';
import { StorageService } from '../../_services/storage.service';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/_services/auth.service';
@Component({
    templateUrl: './donars.component.html',
    providers: [MessageService],
})
export class DonarsComponent implements OnInit {
    donars: Donar[] = [];
    donar: Donar = {};
    selectedDonars: Donar[] = [];
    donarDialog: boolean = false;
    deleteDonarDialog: boolean = false;
    donarViewDialog: boolean = false;
    deleteDonarsDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    submitted: boolean = false;
    genders: any[] = [];
    donations: any[] = [];
    groups: any[] = [];
    states: any[] = [];
    districts: any[] = [];
    rowsPerPageOptions = [5, 10, 20];
    currentUser: any;


    constructor(
        private messageService: MessageService,
        private donarService: DonarService,
        private userService: UserService,
        private storageService: StorageService,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        // Fetch Login User Details
        this.currentUser = this.storageService.getUser();
        // Check User login or not
        // If user not login then redirect to login page
        if (Object.keys(this.currentUser).length === 0) {
            this.router.navigate(['/landing']);
        }


        // If login user is Donar then redirect to Dashboard
        if (this.currentUser.roles[0] === "ROLE_USER") {
            this.router.navigate(['/dashboard']);
        }

        this.retrieveDonars();
        this.genders = [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Other', value: 'Other' },
        ];
        this.groups = [
            { label: 'AB +ve', value: 'AB +ve' },
            { label: 'AB -ve', value: 'AB -ve' },
            { label: 'A +ve', value: 'A +ve' },
            { label: 'A -ve', value: 'A -ve' },
            { label: 'B +ve', value: 'B +ve' },
            { label: 'B -ve', value: 'B -ve' },
            { label: 'O +ve', value: 'O +ve' },
            { label: 'O -ve', value: 'O -ve' },
        ];
        this.states = [

            // { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
            // { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
            // { label: 'Assam', value: 'Assam' },
            // { label: 'Bihar', value: 'Bihar' },
            // { label: ' Chhattisgarh', value: ' Chhattisgarh' },
            // { label: 'Goa', value: 'Goa' },
            // { label: 'Gujarat', value: 'Gujarat' },
            // { label: 'Haryana', value: 'Haryana' },
            // { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
            // { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
            { label: 'Jharkhand', value: 'Jharkhand' },
            // { label: 'Karnataka', value: 'Karnataka' },
            // { label: 'Kerala', value: 'Kerala' },
            // { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
            // { label: 'Maharashtra', value: 'Maharashtra' },
            // { label: 'Manipur', value: 'Manipur' },
            // { label: ' Meghalaya', value: ' Meghalaya' },
            // { label: 'Mizoram', value: 'Mizoram' },
            // { label: 'Nagaland', value: 'Nagaland' },
            // { label: 'Odisha', value: 'Odisha' },
            // { label: 'Punjab', value: 'Punjab' },
            // { label: 'Rajasthan', value: 'Rajasthan' },
            // { label: 'Sikkim', value: 'Sikkim' },
            // { label: 'Tamil Nadu', value: 'Tamil Nadu' },
            // { label: 'Telangana', value: 'Telangana' },
            // { label: 'Tripura', value: 'Tripura' },
            // { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
            // { label: 'West Bengal', value: 'West Bengal' },
        ];
        this.districts = [
            { label: 'East Singhbhum', value: 'East Singhbhum' },
        ]
    }
    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.donars);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'donars');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE =
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
            data,
            fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
        );
    }
    exportPdf() {
        const doc = new jsPDF('l', 'mm', 'a4');
        autoTable(doc, { html: '#pr_id_2-table' });
        doc.save('donars.pdf');
    }
    retrieveDonars(): void {
        this.donarService.getAll().subscribe(
            (data) => {
                this.donars = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }
    saveDonar() {
        this.submitted = true;

        if (
            this.donar.name?.trim() &&
            this.donar.dob?.trim() &&
            this.donar.gender?.trim() &&
            this.donar.group?.trim() &&
            this.donar.fathername?.trim() &&
            this.donar.email?.trim() &&
            this.donar.state?.trim() &&
            this.donar.district?.trim() &&
            this.donar.address?.trim() &&
            this.donar.pincode?.trim()
            // this.donar.mobile?.trim



        ) {
            console.log(this.donar.id);
            if (this.donar.id) {
                console.log('update test');
                this.donarService
                    .update(this.donar.id, this.donar)
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
                    detail: 'Donar Successfully Updated',
                    life: 3000,
                });
            } else {
                this.donarService.create(this.donar).subscribe(
                    (response) => {
                        console.log(response);
                        this.submitted = true;
                        this.ngOnInit();
                    },
                    (error) => {
                        console.log(error);
                    }
                );

                this.submitted = true;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Donar Successfully Registered',
                    life: 3000,
                });
                this.authService
                    .register(
                        this.donar.email,
                        this.donar.email,
                        this.donar.email
                    )
                    .subscribe({
                        next: (data: any) => {
                            console.log(data);
                        },
                        error: (err: { error: { message: any } }) => {
                            console.log(err.error.message);
                        },
                    });
            }

            this.donarDialog = false;
            this.donar = {};
        }

    }

    openNew() {
        this.donar = {};
        this.submitted = false;
        this.donarDialog = true;
    }

    deleteSelectedDonars() {
        this.deleteDonarsDialog = true;
    }
    viewDonar(donar: Donar) {
        this.donar = { ...donar };
        this.donarViewDialog = true;
    }
    editDonar(donar: Donar) {
        this.donar = { ...donar };
        this.donarDialog = true;
    }

    deleteDonar(donar: Donar) {
        this.deleteDonarDialog = true;
        this.donar = { ...donar };
    }

    confirmDeleteSelected() {
        this.deleteDonarsDialog = false;
        this.donars = this.donars.filter(
            (val) => !this.selectedDonars.includes(val)
        );
        // console.log(this.selectedSDonars);
        this.selectedDonars.map((data) => {
            this.donarService.delete(data.id).subscribe(
                (response) => {
                    console.log(response);
                    this.ngOnInit();
                },
                (error) => {
                    console.log(error);
                }
            );
        });

        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: this.selectedDonars.length + ' Donar(s) Deleted',
            life: 3000,
        });
        this.selectedDonars = [];
    }

    confirmDelete() {
        this.deleteDonarDialog = false;
        this.donars = this.donars.filter(
            (val) => val.id !== this.donar.id
        );
        console.log(this.donar.id);
        this.donarService.delete(this.donar.id).subscribe(
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
            detail: 'Donar Deleted',
            life: 3000,
        });
        this.donar = {};
    }

    hideDialog() {
        this.donarDialog = false;
        this.donarViewDialog = false;
        this.submitted = false;
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.donars.length; i++) {
            if (this.donars[i].id === id) {
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

