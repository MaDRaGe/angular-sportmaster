import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '**', component: NotFoundComponent },
]


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    CatalogComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [
    MainComponent
  ]
})
export class MainModule { }
