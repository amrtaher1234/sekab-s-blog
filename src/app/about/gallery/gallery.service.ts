import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
  }
  public fatchChampions() {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
  }
}
