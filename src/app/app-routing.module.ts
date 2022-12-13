import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricsComponent } from './metrics/metrics.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { MailAppComponent } from './mail-app/mail-app.component';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { MychartComponent } from './mychart/mychart.component';

const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'metrics', component:MetricsComponent},
  { path: 'layouts', component:LayoutsComponent},
  { path: 'task-manager', component:TaskManagerComponent},
  { path: 'mail-app', component:MailAppComponent},
  { path: 'contact-app', component:ContactAppComponent},
  { path: 'chat-app', component:ChatAppComponent},
  {path : 'chart', component : MychartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
