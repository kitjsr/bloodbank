import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { DonationService } from '../../services/donation.service';
import { DonarService } from '../../services/donar.service';
import { DirectoryService } from '../../services/directory.service';
import { Donationreport } from '../donationreport/donationreport';

import { StorageService } from '../../_services/storage.service';
import { Router } from "@angular/router";
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
   
    chartData: any;
    donationreports: Donationreport[] = [];
    donationreport: Donationreport = {};
    chartOptions: any;

    // subscription!: Subscription;
    subscriptions: any;
    countdonars: any;
    countdirectorys: any;
    countdonations: any;
    currentUser: any;
    constructor(
        
        public layoutService: LayoutService,
        private directoryService: DirectoryService,
        private donarService: DonarService,
        private donationService: DonationService,
        private storageService: StorageService,private router: Router

    ) {
    
    }
    ngOnInit() {
        this.retrieveDonationreports();
        this.initChart();
        this.retrieveDonarsCount();
        this.retrieveDirectorysCount();
        this.currentUser = this.storageService.getUser();
        if(Object.keys(this.currentUser).length===0){
            this.router.navigate(['/landing']);
          }
    }
    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['AB','A','B','O'],
            datasets: [
                {
                    label: '+',
                    data: [65, 59, 80, 81, 56, 55, 40, 30],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-300'),
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    borderWidth: 1
                },
                {
                    label: '-',
                    data: [65, 59, 80, 81, 56, 55, 40, 30],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--red-300'),
                    borderColor: documentStyle.getPropertyValue('--red-500'),
                    borderWidth: 1
                },
            
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
    retrieveDonarsCount(): void {
        this.donarService.count().subscribe(
            (data) => {
                this.countdonars = data.no;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    retrieveDirectorysCount(): void {
        this.directoryService.count().subscribe(
            (data) => {
                this.countdirectorys = data.no;
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
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
}
