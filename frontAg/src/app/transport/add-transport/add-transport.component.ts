import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transport } from 'src/model/transport';
import { TransportService } from 'src/service/transport/transport.service';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent {
  constructor(private dialog: MatDialog, private transportService: TransportService,private snackBar: MatSnackBar
    ,public dialogRef: MatDialogRef<AddTransportComponent>) { }

  transport : Transport = {
    idTransport: 0,
    nom: '',
    type: '',
    capacite: 0
  }
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
  addNewTransport(transportData: Transport) {
    this.transportService.addTransport(transportData).subscribe(
      (response) => {
      
        console.log('New Trans added successfully:', response);
        this.showSnackBar('Transport Ajouté');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error adding new tran:', error);
        this.dialogRef.close();
      }
    );
  }

}
