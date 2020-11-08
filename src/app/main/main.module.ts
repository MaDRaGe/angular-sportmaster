import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';


/*const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '**', component: NotFoundComponent },
]*/

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'catalog', 
    component: CatalogComponent, 
    children: [
      {
        path: '**',
        component: CatalogComponent
      }
    ]
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  },
]

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    CatalogComponent,
    SideMenuComponent,
    CategoryCardComponent,
    CardComponent
  ],
  bootstrap: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class MainModule { }
