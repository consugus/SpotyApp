import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url:string = "https://api.spotify.com/v1/";

  constructor( private http:HttpClient ) {
    console.log("Spotify service cargado");
  }

  getHeader(){
    const token:string =  "BQBfaFZDPYtxlGp7bD7OVuYSyv5HIT0g_0YbEYHto3cEwiABu8nCYrdhfoSLA1KH4Xfb4fi8Tb2ylLfEaEU";
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
