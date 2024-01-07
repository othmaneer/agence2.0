import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AddClientComponent } from 'src/app/client/add-client/add-client/add-client.component';
import { AddDestinationComponent } from 'src/app/destination/add-destination/add-destination.component';
import { AddHotelComponent } from 'src/app/hotel/add-hotel/add-hotel.component';
import { AddTransportComponent } from 'src/app/transport/add-transport/add-transport.component';
import { AddReservationComponent } from 'src/app/reservation/add-reservation/add-reservation.component';
import { Router } from '@angular/router';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('animation', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],
})
export class MainComponent {


  constructor(public dialog: MatDialog,private router: Router,private cdr: ChangeDetectorRef){
  
  }


  items: MenuItem[] | any;
  ngOnInit() {
    this.isMainComponentEnabled = true;
    this.isLoading = true;
      this.isTestComponentEnabled = false;
      this.isMainComponentEnabled = true;
  
      this.loadingProgress = 0;
      const progressInterval = setInterval(() => {
        if (this.loadingProgress < 100) {
          this.loadingProgress += 10; // Adjust this value to control the loading progress
        } else {
          clearInterval(progressInterval);
          this.isLoading = false;
        }
      }, 100);
  
   // this.test()

    }
    isLoading: boolean = false;

    pageTitle: string = 'Catalogue des clients';
    addButtonLabel: string = 'Client';
    @Output() tabChange = new EventEmitter<number>();
    @ViewChild('listClientTab') listClientTab: any; 
    @ViewChild('listDestinationTab') listDestinationTab: any; 
    @ViewChild('listReservationTab') listReservationTab: any; 
    @ViewChild('listFactureTab') listFactureTab: any; 
    @ViewChild('listTransportTab') listTransportTab: any; 
    @ViewChild('listHotelTab') listHotelTab: any; 
    headerTitle: string = 'Catalogue des clients';
    currentTabIndex: number = 0;
    isSidebarOpenedFull : boolean = true;
    isSidebarOpened = true;
    isSidebarHovered = false;
    isTestComponentEnabled: boolean = true;
    isMainComponentEnabled: boolean = false;
    expandSidebar() {
      this.isSidebarHovered = true;
    }
    ngAfterViewInit() {
   
  //this.test()
      this.currentTabIndex
    }

    isHovered: boolean = false;
    showText(event: MouseEvent) {
      this.isHovered = true;
    }
  
    hideText(event: MouseEvent) {
      this.isHovered = false;
    }
    collapseSidebar() {
      this.isSidebarHovered = false;
    }
    isReportingVisible: boolean = false;
    loadingProgress: number = 0;

    main() {
      this.isLoading = true;
      this.isTestComponentEnabled = false;
      this.isMainComponentEnabled = true;
  
      this.loadingProgress = 0;
      const progressInterval = setInterval(() => {
        if (this.loadingProgress < 100) {
          this.loadingProgress += 10; // Adjust this value to control the loading progress
        } else {
          clearInterval(progressInterval);
          this.isLoading = false;
        }
      }, 100);
    }
    onTabChange(event: any) {
   
      switch (event.index) {
        case 0:
          this.pageTitle = 'Catalogue des clients';
          this.addButtonLabel = 'Client';
          break;
        
        case 1:
          this.pageTitle = 'Catalogue des factures';
          this.addButtonLabel = 'Facutre';
          break;
          case 2:
            this.pageTitle = 'Catalogue des hotels';
            this.addButtonLabel = 'Hotel';
            break;
        case 3:
          this.pageTitle = 'Catalogue des reservations';
          this.addButtonLabel = 'Reservation';
          break;
        case 4:
          this.pageTitle = 'Catalogue des transports';
          this.addButtonLabel = 'Transport';
        break;
        case 5:
          this.pageTitle = 'Catalogue des destinations';
          this.addButtonLabel = 'Destination';
  
        break;
        default:
          this.pageTitle = 'Catalogue des clients';
          this.addButtonLabel = 'Client';
          break;
      }
      this.tabChange.emit(event.index);
      this.currentTabIndex = event.index;
      this.refreshTabComponents();
    }
    navigateToTab(tabIndex: number) {
      this.currentTabIndex = tabIndex;
      this.onTabChange({ index: tabIndex });
    }
    refreshTabComponents(): void {
    
      if (this.listClientTab && this.listClientTab.refresh) {
        this.listClientTab.refresh();
      }
      if (this.listDestinationTab && this.listDestinationTab.refresh) {
        this.listDestinationTab.refresh();
      }
      if (this.listFactureTab && this.listFactureTab.refresh) {
        this.listFactureTab.refresh();
      }
      if (this.listHotelTab && this.listHotelTab.refresh) {
        this.listHotelTab.refresh();
      }
      if (this.listReservationTab && this.listReservationTab.refresh) {
        this.listReservationTab.refresh();
      }
      if (this.listTransportTab && this.listTransportTab.refresh) {
        this.listTransportTab.refresh();
      }
     
      this.cdr.detectChanges();
    }

    openAddDialog(): void {
      if(this.pageTitle=='Catalogue des clients'){
        this.openAddClientDialog();
      }
      if(this.pageTitle=='Catalogue des hotels'){
        this.openAddHotelDialog();
      }
      if(this.pageTitle=='Catalogue des reservations'){
        this.openAddReservationDialog();
      }
     
      if(this.pageTitle=='Catalogue des transports'){
        this.openAddTransportDialog();
      }
     
      if (this.pageTitle == 'Catalogue des destinations') {
        this.openAddDestinationDialog();
  
      }
    }

    openAddClientDialog(): void {
      const dialogRefClient = this.dialog.open(AddClientComponent, {
        width: 'auto',
        height: 'auto',
      });
      dialogRefClient.afterClosed().subscribe(result => {
        this.listClientTab.refresh();
      });
  
    }

 

    openAddHotelDialog(): void {

      const dialogRefHotel = this.dialog.open(AddHotelComponent, {
        width: '800px',
        height: '300px',
  
      });
      dialogRefHotel.afterClosed().subscribe(result => {
        if (result) {
          setTimeout(() => {
            this.refreshTabComponents();
          });
        }
      });
  
    }
    openAddReservationDialog(): void {
      const dialogRef = this.dialog.open(AddReservationComponent, {
        maxWidth: '100%',
        height: 'auto',
        minWidth: '1100px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          setTimeout(() => {
            this.refreshTabComponents();
          });
        }
      });
    }

    openAddTransportDialog(): void {
      const dialogRef = this.dialog.open(AddTransportComponent, {
        maxWidth: '100%',
        height: 'auto',
        minWidth: '1100px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          setTimeout(() => {
            this.refreshTabComponents();
          });
        }
      });
    }

    openAddDestinationDialog(): void {
      const dialogRef = this.dialog.open(AddDestinationComponent, {
        maxWidth: '100%',
        height: 'auto',
        minWidth: '1100px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          setTimeout(() => {
            this.refreshTabComponents();
          });
        }
      });
    }



}
