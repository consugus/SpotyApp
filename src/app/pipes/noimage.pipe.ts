import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  // Pipe returns the locale noimage.png URL if images[] doesn't have an image URL specified
  // in it, or returns the route specified at images[]

  transform(images: any[]): string {
    return ( (!images || images.length == 0) ?  'assets/img/noimage.png' : images[1].url );
  }

}
