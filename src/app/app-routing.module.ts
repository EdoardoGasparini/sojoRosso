import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path:'', component: AboutComponent, pathMatch:'full'},
  {path:'eventi', component:EventComponent},
  {path:'galleria', component:GalleryComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
