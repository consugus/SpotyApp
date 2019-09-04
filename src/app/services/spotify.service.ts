import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http:HttpClient ) {
    console.log("Spotify service cargado");
   }

  getNewReleases(){
     const headers:HttpHeaders = new HttpHeaders({
      Authorization:'Bearer BQAajiiNipe7cNxUcC3tTAGAOAURZ1bloZe51MQ2RyJ70wa--i-DcM9ngmjMuXvoxImIDIxE2Tb0y7OUYBU'
     });
      this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe( data => {
          console.log(data);
        })
   };
}
