import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Hotel } from 'src/model/hotel';
import { HotelService } from 'src/service/hotel/hotel.service';
import { EditHotelComponent } from '../edit-hotel/edit-hotel.component';
import { DeleteHotelComponent } from '../delete-hotel/delete-hotel.component';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent {
  @Input() headerTitle: string = 'Client';
  @Input() addButtonLabel: string = 'Default Button Label';
  hotels: Hotel[] = [];

  displayedColumns: string[] = [
    'Nom',
    'Libelle',
    'Caracteristique',
    'Prix',
    'Action',
  ];

  nb: number | any;
  pageNumber: number = 0;
  sizePage: number = 5;
  nom: string = '';
  libelle: string = '';
  caracteristique: string = '';
  prix: number = 0;
  hotelControl: any;
  selectedHotel: Hotel | null = null;

  constructor(  private hotelService: HotelService,
    public dialog: MatDialog){}
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    
    ngOnInit() {
      this.refresh();
      this.fetchHotel();
    }
    refresh(): void {
      this.fetchHotel();
    }

  defaultnom: string = '';
  defaultlibelle: string = '';
  defaultcaracteristique: string = '';
  defaultprix:  number = 0;

  
  resetFields() {
    // Réinitialiser les valeurs des champs aux valeurs par défaut
    this.nom = this.defaultnom;
    this.libelle = this.defaultlibelle;
    this.caracteristique = this.defaultcaracteristique;
    this.prix = this.defaultprix;
    this.hotelControl=undefined
    this.fetchHotel();
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
  onPageChange(event: PageEvent) {
    
    this.sizePage = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.fetchHotel();
  }

  openEditDialog(hotel: Hotel): void {
    this.selectedHotel = hotel;
    
    const dialogRef = this.dialog.open(EditHotelComponent, {
      maxWidth: '150%',
      height: '400px',
      data: hotel,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchHotel();
      }
    });
  }

  openDeleteDialog(hotel: Hotel): void {
    const dialogRef = this.dialog.open(DeleteHotelComponent, {
      data: hotel,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("Supprimer client fct")
        this.fetchHotel();
      }
    });
  }


}
