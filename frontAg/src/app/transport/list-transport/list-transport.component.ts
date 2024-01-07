import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Transport } from 'src/model/transport';
import { TransportService } from 'src/service/transport/transport.service';
import { EditTransportComponent } from '../edit-transport/edit-transport.component';
import { DeleteTransportComponent } from '../delete-transport/delete-transport.component';

@Component({
  selector: 'app-list-transport',
  templateUrl: './list-transport.component.html',
  styleUrls: ['./list-transport.component.css']
})
export class ListTransportComponent {

  // @Input() headerTitle: string = 'Transport';
  // @Input() addButtonLabel: string = 'Default Button Label';
  transports: Transport[] = [];

 displayedColumns: string[] = [
    'Nom',
    'Type',
    'Capacité',
    'Action',
  ];
  nb: number | any;
  pageNumber: number = 0;
  sizePage: number = 5;
  nom: string = '';
  type: string = '';
  capacite: string = '';
  transportControl: any;
selectedTransport: Transport | null = null;

constructor(  private transportService: TransportService,
  public dialog: MatDialog){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    
    this.fetchTransports();
  }


  fetchTransports() {
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
  onPageChange(event: PageEvent) {
    
      this.sizePage = event.pageSize;
      this.pageNumber = event.pageIndex;
      this.fetchTransports();
    }

    openEditDialog(transport: Transport): void {
      this.selectedTransport = transport;
      const dialogRef = this.dialog.open(EditTransportComponent, {
        maxWidth: '150%',
        height: '400px',
        data: transport,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.fetchTransports();
        }
      });
    }

    openDeleteDialog(transport: Transport): void {
      const dialogRef = this.dialog.open(DeleteTransportComponent, {
        data: transport,
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log("Supprimer trans fct")
          this.fetchTransports();
        }
      });
    }

}
