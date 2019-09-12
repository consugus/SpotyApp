import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[]
  loading:boolean; // bandera para indicar que se muestre el loadingComponent

  constructor( private spotify:SpotifyService ) {

    this.loading = true; // Muestra el spinner

    this.spotify.getNewReleases()
      .subscribe( (data:any) => {
        this.nuevasCanciones = data;
        this.loading = false; // Cuando terminó de cargar la data, oculta el spinner
      });
  }



  ngOnInit() {
  }

}
