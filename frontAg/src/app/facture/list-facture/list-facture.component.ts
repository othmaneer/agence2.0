import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Facture } from 'src/model/facture';
import { FactureService } from 'src/service/facture/facture.service';


@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent {

  displayedColumns: string[] = [
    'ID',
    'Reservation ID',
    'Client',
    'Hotel',
    'Date début',
    'Date de fin',
    'Status',
    'Total',
    'Action',
  ]; 

  factures: Facture[] = [];

  dataSource = new MatTableDataSource<Facture>(this.factures);
  selectedFacture: Facture | null = null;
  nb: number | any;
  pageNumber: number = 0;
  sizePage: number = 5;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private factureService: FactureService,

    ) { }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
      this.fetchFacture();
    } 

    fetchFacture(): void {
      this.factureService.getAllFacturePage(this.pageNumber, this.sizePage).subscribe(
        (data: any) => {
          this.nb = data.totalElements;
          this.factures = data.content;
          this.dataSource.data = this.factures;

          console.log("fetch")
          console.log(data.content)
        },
        (error) => {
          console.error('Error fetching reservation:', error);
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
      this.fetchFacture();
  
    }
  



}
