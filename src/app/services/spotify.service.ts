import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url:string = "https://api.spotify.com/v1/";

  constructor( private http:HttpClient ) {
    console.log("Spotify service cargado");
  }
  
  getHeader(){
    const token:string =  "BQBATbSErSgl-6-qK5tT8XjqxGi66yOlY8YQdWSBTADVxYmm9_2VJ_xQvNAEHLG_m5gqkK3sC2vnxiVol70";
    const headers:HttpHeaders = new HttpHeaders({
     Authorization:`Bearer ${token}`
    });
    return headers;
  }



  getNewReleases(){
    const headers:HttpHeaders = this.getHeader();
    return this.http.get(this.url + 'browse/new-releases', { headers })
      .pipe( map( (data:any) => data.albums.items ))
  };

  getArtist(str:string){
    const headers:HttpHeaders = this.getHeader();
    return ( this.http.get(this.url + `search?q=${ str }&type=artist&limit=15`, {headers}) )
      .pipe( map( (data:any) =>  data.artists.items ))
   };



}
