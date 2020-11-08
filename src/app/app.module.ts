import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { Routes, RouterModule } from '@angular/router'
import { MainModule } from './main/main.module';
import { HomeComponent } from './home/home.component';
import { SafeUrlPipe } from './safe-url.pipe';


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
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SafeUrlPipe,
  ],
  imports: [
    CommonModule,
    MainModule,
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [ AppComponent ],
  providers: [SafeUrlPipe],
  exports: [SafeUrlPipe]
})
export class AppModule {}