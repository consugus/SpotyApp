import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {

    let image:string;

    if(!images || images.length == 0){
      image =  'assets/img/noimage.png'
    } else{
      image = images[1].url
    }

    return image;
  }

}
