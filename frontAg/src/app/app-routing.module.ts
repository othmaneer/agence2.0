import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './client/list-client/list-client/list-client.component';
import { ListDestinationComponent } from './destination/list-destination/list-destination.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { ListHotelComponent } from './hotel/list-hotel/list-hotel.component';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';
import { ListTransportComponent } from './transport/list-transport/list-transport.component';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './charts/reporting/reporting.component';
import { ReportingComponent } from './reporting/reporting/reporting.component';
const routes: Routes = [

  {path:'client', component:ListClientComponent},
  {path:'reservation', component:ListReservationComponent},
  {path:'facture', component:ListFactureComponent},
  {path:'transport', component:ListTransportComponent},
  {path:'destination', component:ListDestinationComponent},
  {path:'hotel', component:ListHotelComponent},
  {path:'main', component:MainComponent},
  {path:'chart', component:ReportingComponent},
  {path:'', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
