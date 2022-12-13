import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../Extra/dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


const routes:Routes=[
  {
    path:"",
    component:DashboardComponent
  }
]
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,
    MatCardModule
  ],
})
export class DashboardModule { }
