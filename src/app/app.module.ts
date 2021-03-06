import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistComponent } from './component/artist/artist.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";


// Importar rutas
import { ROUTES } from './app.routes';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardComponent } from './component/card/card.component';
import { LoadingComponent } from './component/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
