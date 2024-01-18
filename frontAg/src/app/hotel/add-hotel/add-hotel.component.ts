import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/model/hotel';
import { HotelService } from 'src/service/hotel/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent {

  constructor(private dialog: MatDialog, private hotelService: HotelService, private snackBar: MatSnackBar
    ,public dialogRef: MatDialogRef<AddHotelComponent>) { }

  hotel : Hotel = {
    idHotel: 0,
    nom: '',
    libelle: '',
    caracteristique: '',
    prix: 0
  }
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
  addNewHotel(hotelData: Hotel) {
    this.hotelService.addHotel(hotelData).subscribe(
      (response) => {
      
        console.log('New HOTEL added successfully:', response);
        this.showSnackBar('Hotel Ajouté');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error adding new hotel:', error);
        this.dialogRef.close();
      }
    );
  }

}
