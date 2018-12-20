import { Component, OnInit } from '@angular/core';
import { transition, trigger, animate, style, state } from '@angular/animations';
import {GalleryService} from './gallery.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations : [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('2s ease')
      ]),
    ])
  ]
})
export class GalleryComponent implements OnInit {

  flyIn: boolean;
  championsObject: Observable<any>;
  championCounter = 0 ;
  constructor(private galleryService: GalleryService ) {
   this.flyIn = true;
   }

  ngOnInit() {
    this.championsObject = this.galleryService.fatchChampions();
  }
  changeImage(selector) {
    if (selector === 'next') {
       this.championCounter++;
    } else {
      if (this.championCounter - 1 >= 0) {
        this.championCounter--;
      }
    }

  }
  getChampion(object) {
    return Object.values(object['data'])[this.championCounter];
  }
  getIcon(object) {
    const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';
    return ('url(' + url + Object.values(object['data'])[this.championCounter]['id'] + '.png').toString() + ')';
  }
}
