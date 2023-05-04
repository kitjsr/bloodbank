import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Stock } from './stock';
import { StockService } from '../../services/stock.service';


@Component({
    templateUrl: './stocks.component.html',
    providers: [MessageService],
})
export class StocksComponent implements OnInit {
    stocks: Stock[] = [];
    stock: Stock = {};
    selectedStocks: Stock[] = [];
    StockDialog: boolean = false;
    deleteStockDialog: boolean = false;
    stockViewDialog:boolean=false;
    deleteStocksDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    submitted: boolean = false;
    groups: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private messageService: MessageService,
        private stockService: StockService
    ) {}

    ngOnInit() {
        this.retrieveStocks();
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
    }
    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.stocks);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ['data'],
            };
            const excelBuffer: any = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });
            this.saveAsExcelFile(excelBuffer, 'stocks');
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
    retrieveStocks(): void {
        this.stockService.getAll().subscribe(
            (data) => {
                this.stocks = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }
    saveStock() {
        this.submitted = true;

        if (
                this.stock.name?.trim()&&
                this.stock.availability?.trim()&&
                this.stock.group?.trim()&&
                this.stock.address?.trim()&&
                // this.stock.mobile?.trim()&&
                this.stock.email?.trim()&&
                this.stock.category?.trim()

        ){
            console.log(this.stock.id);
            if (this.stock.id) {
                console.log('update test');
                this.stockService
                    .update(this.stock.id, this.stock)
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
                    detail: 'Stock Successfully Updated',
                    life: 3000,
                });
            } else {
                this.stockService.create(this.stock).subscribe(
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
                    detail: 'Stock Successfully Registered',
                    life: 3000,
                });
            }

            this.StockDialog = false;
            this.stock = {};
        }
    }

    openNew() {
        this.stock = {};
        this.submitted = false;
        this.StockDialog = true;
    }

    deleteSelectedStocks() {
        this.deleteStocksDialog = true;
    }
    viewStock(stock: Stock) {
        this.stock = { ...stock };
        this.stockViewDialog= true;
    }
    editStock(stock: Stock) {
        this.stock = { ...stock };
        this.StockDialog = true;
    }

    deleteStock(stock: Stock) {
        this.deleteStockDialog = true;
        this.stock = { ...stock };
    }

    confirmDeleteSelected() {
        this.deleteStocksDialog = false;
        this.stocks = this.stocks.filter(
            (val) => !this.selectedStocks.includes(val)
        );
        // console.log(this.selectedSStocks);
        this.selectedStocks.map((data) => {
            this.stockService.delete(data.id).subscribe(
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
            detail: this.selectedStocks.length + ' Stock(s) Deleted',
            life: 3000,
        });
        this.selectedStocks = [];
    }

    confirmDelete() {
        this.deleteStockDialog = false;
        this.stocks = this.stocks.filter(
            (val) => val.id !== this.stock.id
        );
        console.log(this.stock.id);
        this.stockService.delete(this.stock.id).subscribe(
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
            detail: 'Stock Deleted',
            life: 3000,
        });
        this.stock = {};
    }

    hideDialog() {
        this.StockDialog = false;
        this.stockViewDialog=false;
        this.submitted = false;
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.stocks.length; i++) {
            if (this.stocks[i].id === id) {
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

