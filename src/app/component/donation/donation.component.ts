import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { MemberService } from '../../services/member.service';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Donar } from '../donars/donar';
import { DonarService } from '../../services/donar.service';

import { Directory } from '../directorys/directory';
import { DirectoryService } from '../../services/directory.service';

import { Donation } from './donation';
import { DonationService } from '../../services/donation.service';


@Component({
    templateUrl: './donation.component.html',
    providers: [MessageService],
})
export class DonationComponent implements OnInit {
    // donations: Donation[] = [];
    donations:any;
    donation: Donation = {};

    donars: Donar[] = [];
    donar: Donar ={};
    directorys: Directory[] = [];
    directory: Directory ={};

    selectedDonations: Donation[] = [];
    donationDialog: boolean = false;
    
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];

    subscribeDialogBox: boolean=false;

    constructor(
        private messageService: MessageService,
        private donationService: DonationService,
        private donarService: DonarService,
        private directoryService: DirectoryService
    ) {}

    ngOnInit() {
        
        this.retrieveDonars();
        this.retrieveDirectorys();
    }

    
    retrieveDonars(): void {
        this.donarService.getAll().subscribe(
            (data) => {
                this.donars = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    retrieveDirectorys(): void {
        this.directoryService.getAll().subscribe(
            (data) => {
                this.directorys = data;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    
    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.donations);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'donation');
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
        doc.save('donations.pdf');
    }
    
   

    openNew() {
       
        this.subscribeDialogBox = true;
    }

    

    
    subscribeDonar(donar: Donar) {
        this.subscribeDialogBox = true;
        this.donar = { ...donar };
        // this.directory = { ...donar };
    }
   
    subscribeDonarship() {
        this.subscribeDialogBox = false;
        // this.donation.donarId=this.donar.id;
        // console.log(this.donar.id);
        console.log(this.donation);
        this.donationService.create(this.donation).subscribe(
            (response) => {
                console.log(response);
                this.submitted = true;
                this.ngOnInit();
            },
            (error) => {
                console.log(error);
            }
        );
       
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Donation Issued',
            life: 3000,
        });
    }

    hideDialog() {
        this.subscribeDialogBox = false;
        this.submitted = false;
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.donations.length; i++) {
            if (this.donations[i].id === id) {
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
