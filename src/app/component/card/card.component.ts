import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {

  @Input() items:any[] = [];

  constructor(private router:Router) { }

  verArtista( item:any){

    let artistID:string  = ( (item.type === "artist") ? item.id : item.artists[0].id );
    // console.log(artistID);
    this.router.navigate( ["artist", artistID] );

  }

}
