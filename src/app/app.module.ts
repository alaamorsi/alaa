import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { ReserveComponent } from './reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    RoomdetailsComponent,
    ReserveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'room',component:RoomComponent},
      {path:'room/:_id',component:RoomdetailsComponent},  
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }