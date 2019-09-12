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
    const token:string =  "BQDG7oJzCrB56ugOLJfiXoCdfL8Fu23pVfbbZnNQov0XlZH2szoyCvYcflZFnc5QB9vy8Qc1LbuGFiaBx74";
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

  getArtists(str:string){
    const headers:HttpHeaders = this.getHeader();
    return ( this.http.get(this.url + `search?q=${ str }&type=artist&limit=15`, { headers }) )
          .pipe( map( (data:any) =>  data.artists.items ))
        };

  getArtistById( artistId:string ){
          const headers:HttpHeaders = this.getHeader();
          return  ( this.http.get( this.url + `artists/${artistId}` , { headers } ) )
        }

  getArtistTopTracks( artistId: string){
    const headers:HttpHeaders = this.getHeader();

    return this.http.get( this.url + `artists/${artistId}` + '/top-tracks?country=es', { headers } )
          .pipe( map( (data:any) =>  data.tracks ))

   }



}
