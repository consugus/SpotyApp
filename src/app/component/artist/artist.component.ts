import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist:any;
  topTracks:any;
  loading:boolean = true;

  constructor(private router:ActivatedRoute, spotify:SpotifyService) {
    this.router.params.subscribe( ( params ) => {

        let id:string = params.id;

        spotify.getArtistById(id).subscribe( artista => {
          // console.log(artista);
          this.artist = artista;
          this.loading = false;

        } );

        this.topTracks = spotify.getArtistTopTracks(id).subscribe( data => {
          this.topTracks = (data)
          console.log(data);
        } )

      })
    }
}
