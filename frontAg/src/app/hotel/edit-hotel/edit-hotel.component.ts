import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/model/hotel';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';
import { HotelService } from 'src/service/hotel/hotel.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent {

  constructor(private dialog: MatDialog, private hotelService: HotelService, public dialogRef: MatDialogRef<AddHotelComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Hotel) {
      this.hotel=data;
     }
     hotel: Hotel | any;
     updateHotel(formData: any): void {
      console.log("hotel selected nom formData: "+formData.nom);
      //console.log("client selected tel formData: "+formData.tel);
      this.hotel.nom = formData.nom;
      this.hotel.libelle = formData.libelle;
      this.hotel.caracteristique=formData.caracteristique;
      this.hotel.prix= parseFloat(formData.prix);;

      console.log("Hotel update comp fct")
      this.hotelService.updateHotel(this.hotel).subscribe(
        (response) => {
          console.log('After response hotel updated successfully:', response);
          this.dialogRef.close(this.hotel);
          this.showSnackBar('hotel updated successfully');
        },
        (error) => {
          console.error('Error updating hotel:', error);
        }
      );
    }
    showSnackBar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }

}
