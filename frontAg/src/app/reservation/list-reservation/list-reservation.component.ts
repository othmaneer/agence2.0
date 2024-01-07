import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/model/client';
import { Destination } from 'src/model/destination';
import { Hotel } from 'src/model/hotel';
import { Reservation } from 'src/model/reservation';
import { Transport } from 'src/model/transport';
import { ClientService } from 'src/service/client/client.service';
import { DestinationService } from 'src/service/destination/destination.service';
import { HotelService } from 'src/service/hotel/hotel.service';
import { ReservationService } from 'src/service/reservation/reservation.service';
import { TransportService } from 'src/service/transport/transport.service';
import { DeleteReservationComponent } from '../delete-reservation/delete-reservation.component';
import { EditReservationComponent } from '../edit-reservation/edit-reservation.component';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {

  displayedColumns: string[] = [
    'ID',
    'Client',
    'Hotel',
    'Destination',
    'Date début',
    'Date de fin',
    'Transport',
    'Status',
    'Action',
  ];

  nb: number | any;
  pageNumber: number = 0;
  sizePage: number = 5;
  client: string = '';
  hotel: string = '';
  destination: string = '';
  date_debut:any;
  date_fin:any;
  transport: string = '';
  status: string = '';

  clients:Client[]=[];
  hotels:Hotel[]=[];
  transports:Transport[]=[];
  destinations:Destination[]=[];
  reservations: Reservation[] = [];
  dataSource = new MatTableDataSource<Reservation>(this.reservations);

  selectedClient: string ='';
  selectedHotel: string ='';
  selectedDestination: string ='';
  selectedTransport: string ='';
  selectedReservation: Reservation | null = null;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private reservationService: ReservationService,
    private clientService: ClientService,
    private hotelService: HotelService,
    private transportService: TransportService,
    private destinationService: DestinationService,
    ) { }


    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
      this.fetchReservation();
      // this.fetchClient();
      // this.fetchDestination()
      // this.fetchTransport();
      // this.fetchHotel();
    }

    fetchReservation(): void {
      this.reservationService.getAllReservationPage(this.pageNumber, this.sizePage).subscribe(
        (data: any) => {
          this.nb = data.totalElements;
          this.reservations = data.content;
          this.dataSource.data = this.reservations;
        },
        (error) => {
          console.error('Error fetching reservation:', error);
        }
      );
    }
    
  fetchHotel() {
    this.hotelService.getAllHotel(this.pageNumber, this.sizePage)
      .subscribe(
        (data: any) => {
          this.hotels = data.content;
          this.nb = data.totalElements;
        },
        (error) => {
          //this.showSpinner=true
          console.error('Error fetching hotels:', error);
        }
      );
  }

    fetchClient() {
      this.clientService.getAllClient(this.pageNumber, this.sizePage)
        .subscribe(
          (data: any) => {
            this.clients = data.content;
            this.nb = data.totalElements;
          },
          (error) => {
            //this.showSpinner=true
            console.error('Error fetching client:', error);
          }
        );
    }
    
  fetchTransport() {
    this.transportService.getAllTransportPage(this.pageNumber, this.sizePage)
      .subscribe(
        (data: any) => {
          this.transports = data.content;
          this.nb = data.totalElements;
        },
        (error) => {
          //this.showSpinner=true
          console.error('Error fetching client:', error);
        }
      );
  }
  fetchDestination() {
    this.destinationService.getAllDestinationPage(this.pageNumber, this.sizePage)
      .subscribe(
        (data: any) => {
          this.destinations = data.content;
          this.nb = data.totalElements;
        },
        (error) => {
          //this.showSpinner=true
          console.error('Error fetching client:', error);
        }
      );
  }
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  onPageChange(event: PageEvent) {
    
    this.sizePage = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.fetchReservation();
    this.fetchClient();
    this.fetchDestination()
    this.fetchTransport();
    this.fetchHotel();
  }

  openEditDialog(reservation: Reservation): void {
    this.selectedReservation = reservation;
    const dialogRef = this.dialog.open(EditReservationComponent, {
      maxWidth: '100%',
      height: '350px',
      data: reservation,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchReservation();
      }
    });
  }
  openDeleteDialog(reservation: Reservation): void {
    const dialogRef = this.dialog.open(DeleteReservationComponent, {
      data: reservation,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("test")
        this.fetchReservation();
      }
    });
  }



    
}
