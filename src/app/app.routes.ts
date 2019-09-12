import { Routes } from "@angular/router";
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistComponent } from './component/artist/artist.component';

export const ROUTES:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];