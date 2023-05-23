import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Directory } from './directory';
import { DirectoryService } from '../../services/directory.service';
import { AuthService } from '../../_services/auth.service';

@Component({
    templateUrl: './directorys.component.html',
    providers: [MessageService],
})
export class DirectorysComponent implements OnInit {
    directorys: Directory[] = [];
    directory: Directory = {};
    selectedDirectorys: Directory[] = [];
    directoryDialog: boolean = false;
    deleteDirectoryDialog: boolean = false;
    directoryViewDialog: boolean = false;
    deleteDirectorysDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    submitted: boolean = false;
    categorys: any[] = [];
    // groups: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private messageService: MessageService,
        private directoryService: DirectoryService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.retrieveDirectorys();
        this.categorys = [
            { label: 'Govt.', value: 'Govt.' },
            { label: 'Private', value: 'Private' },
            { label: 'Red Cross', value: 'Red Cross' },
            { label: 'Charitable/Vol', value: 'Charitable/Vol' },
        ];
    }
    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.directorys);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'directorys');
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
        doc.save('directorys.pdf');
    }
    retrieveDirectorys(): void {
        this.directoryService.getAll().subscribe(
            (data) => {
                this.directorys = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }
    saveDirectory() {
        this.submitted = true;

        if (
            this.directory.name?.trim() &&
            this.directory.address?.trim() &&
            this.directory.email?.trim() &&
            this.directory.category?.trim()
        ) {
            console.log(this.directory.id);
            if (this.directory.id) {
                console.log('update test');
                this.directoryService
                    .update(this.directory.id, this.directory)
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
                    detail: 'Directory Successfully Updated',
                    life: 3000,
                });
            } else {
                this.directoryService.create(this.directory).subscribe(
                    (response) => {
                        console.log(response);
                        this.submitted = true;
                        this.ngOnInit();
                    },
                    (error) => {
                        console.log(error);
                    }
                );
                this.authService
                    .register(
                        this.directory.email,
                        this.directory.email,
                        this.directory.email
                    )
                    .subscribe({
                        next: (data: any) => {
                            console.log(data);
                        },
                        error: (err: { error: { message: any } }) => {
                            console.log(err.error.message);
                        },
                    });

                this.submitted = true;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Directory Successfully Registered',
                    life: 3000,
                });
            }

            this.directoryDialog = false;
            this.directory = {};
        }
    }

    openNew() {
        this.directory = {};
        this.submitted = false;
        this.directoryDialog = true;
    }

    deleteSelectedDirectorys() {
        this.deleteDirectorysDialog = true;
    }
    viewDirectory(directory: Directory) {
        this.directory = { ...directory };
        this.directoryViewDialog = true;
    }
    editDirectory(directory: Directory) {
        this.directory = { ...directory };
        this.directoryDialog = true;
    }

    deleteDirectory(directory: Directory) {
        this.deleteDirectoryDialog = true;
        this.directory = { ...directory };
    }

    confirmDeleteSelected() {
        this.deleteDirectorysDialog = false;
        this.directorys = this.directorys.filter(
            (val) => !this.selectedDirectorys.includes(val)
        );
        // console.log(this.selectedSDirectorys);
        this.selectedDirectorys.map((data) => {
            this.directoryService.delete(data.id).subscribe(
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
            detail: this.selectedDirectorys.length + ' Directory(s) Deleted',
            life: 3000,
        });
        this.selectedDirectorys = [];
    }

    confirmDelete() {
        this.deleteDirectoryDialog = false;
        this.directorys = this.directorys.filter(
            (val) => val.id !== this.directory.id
        );
        console.log(this.directory.id);
        this.directoryService.delete(this.directory.id).subscribe(
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
            detail: 'Directory Deleted',
            life: 3000,
        });
        this.directory = {};
    }

    hideDialog() {
        this.directoryDialog = false;
        this.directoryViewDialog = false;
        this.submitted = false;
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.directorys.length; i++) {
            if (this.directorys[i].id === id) {
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
