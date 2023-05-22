import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Donar } from '../donars/donar';
import { Donationreport } from './donationreport';
import { DonationreportService } from '../../services/donationreport.service';
import { DonarService } from '../../services/donar.service';
import { DonationService } from '../../services/donation.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-donationreport',
    templateUrl: './donationreport.component.html',
    providers: [MessageService],
})
export class DonationreportsComponent implements OnInit {
    expiryDate(arg0: Date) {
        // arg0.setHours(0);
        // arg0.setMinutes(0);
        // arg0.setSeconds(0);
        console.log(arg0);
        // var newDate = new Date(arg0.setMonth(arg0.getMonth()+1));
        // // var newDate = arg0.addMonths(1);
        // console.log(newDate);
        return arg0;
        throw new Error('Method not implemented.');
    }
   
    donationreports: Donationreport[] = [];
    donationreport: Donationreport = {};
    donars: Donar[] = [];
    selectedDonationreports: Donationreport[] = [];
    donationreportDialog: boolean = false;
    donationreportViewDialog: boolean = false;
    deleteDonationreportDialog: boolean = false;
    deleteDonationreportsDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    submitted: boolean = false;
    donations: any[] = [];
    // trainernames: any[] = [];
    rowsPerPageOptions = [5, 10, 20];
    currentUser: any;

    constructor(
        private messageService: MessageService,
        private donationreportService: DonationreportService,
        private donationService: DonationService,
        private storageService: StorageService,
        private router: Router
    ) {}

    ngOnInit() {
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
        this.retrieveDonationreports();
        // this.subscriptions = [
        //     { label: '1 Month', value: '1 Month' },
        //     { label: '3 Month', value: '3 Month' },
        //     { label: '6 Month', value: '6 Month' },
        //     { label: '12 Month', value: '12 Month' },
        // ];
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.donationreports);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'donationreports');
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
        doc.save('donationreports.pdf');
    }
    retrieveDonationreports(): void {
        this.donationService.getAllDonation().subscribe(
            (data) => {
                this.donationreports = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.donationreports.length; i++) {
            if (this.donationreports[i].id === id) {
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
