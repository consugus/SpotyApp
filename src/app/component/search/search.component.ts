import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists:any[] = [];
  loading:boolean; // bandera para indicar que se muestre el loadingComponent

  constructor(private spotify:SpotifyService) {
    // this.loading = false;
   }

  buscar(str: string){
    this.loading = true; // Muestra el spinner
    this.spotify.getArtists(str)
        .subscribe( (data: any) => {
          console.log(data);
          this.artists = data;
          this.loading = false; // Cuando terminó de cargar la data, oculta el spinner
        })

    };

}
