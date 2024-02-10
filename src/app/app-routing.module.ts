import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'', component: AboutComponent, pathMatch:'full'},
  {path:'eventi', component:EventComponent},
  {path:'galleria', component:GalleryComponent},
  {path:'contatti', component:ContactComponent},
  {path:'pannello', component:AuthComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
