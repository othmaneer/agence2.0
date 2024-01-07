import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transport } from 'src/model/transport';
import { TransportService } from 'src/service/transport/transport.service';

@Component({
  selector: 'app-edit-transport',
  templateUrl: './edit-transport.component.html',
  styleUrls: ['./edit-transport.component.css']
})
export class EditTransportComponent {

  constructor(private dialog: MatDialog, private transportService: TransportService, public dialogRef: MatDialogRef<EditTransportComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Transport) {
      this.transport=data;
     }

     transport: Transport | any;

     updateTransport(formData: any): void {
 
      this.transport.nom = formData.nom;
      this.transport.type = formData.type;
      this.transport.capacite=formData.capacite;

      console.log("Transport update comp fct")
      this.transportService.updateTransport(this.transport).subscribe(
        (response) => {
          console.log('After response transport updated successfully:', response);
          this.dialogRef.close(this.transport);
          this.showSnackBar('Transport updated successfully');
        },
        (error) => {
          console.error('Error updating transport:', error);
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
