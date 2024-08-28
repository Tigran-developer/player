import {Injectable} from '@angular/core';
import {MP3Record} from "../models/MP3Record";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private Records: MP3Record[] = [
    {
      id: 1,
      name: 'Моя Игра',
      album: 'Хлеб',
      path: 'https://cdn7.sefon.pro/prev/ANaIamenLeJpq90d1YSCNQ/1724822348/6/%D0%91%D0%B0%D1%81%D1%82%D0%B0%20-%20%D0%9C%D0%BE%D1%8F%20%D0%98%D0%B3%D1%80%D0%B0%20%28192kbps%29.mp3'
    },
    {
      id: 2,
      name: 'Ocean Drive',
      album: 'Ocean Drive',
      path: 'https://cdn3.sefon.pro/prev/cPOv_KTvG6CDaEnNsXlGqg/1724822612/332/Duke%20Dumont%20-%20Ocean%20Drive%20%28192kbps%29.mp3'
    },
    {
      id: 3,
      name: 'Lonely Day',
      album: 'Hypnotize',
      path: 'https://cdn8.sefon.pro/prev/aZ0RepMZE7bqvIcZ1IRM9A/1724881431/1/System%20Of%20A%20Down%20-%20Lonely%20Day%20%28192kbps%29.mp3'
    },
    {
      id: 4,
      name: 'Legendary',
      album: 'Legends Never Die',
      path: 'https://cdn3.sefon.pro/prev/hitSaJwRKp366U4SAiM-8Q/1724822734/131/Welshly%20Arms%20-%20Legendary%20%28192kbps%29.mp3'
    },
    {
      id: 5,
      name: 'I Wanna Be Yours',
      album: 'AM',
      path: 'https://cdn3.sefon.pro/prev/zVbJiEUKsrGdeMw1yrfDIg/1724881379/24/Arctic%20Monkeys%20-%20I%20Wanna%20Be%20Yours%20%28192kbps%29.mp3'
    },
    {
      id: 6,
      name: 'Вахтерам',
      album: 'Солдатский альбом',
      path: 'https://cdn7.sefon.pro/prev/fFQqEF86MOwCWd_odCKOvg/1724822802/196/%D0%91%D1%83%D0%BC%D0%B1%D0%BE%D0%BA%D1%81%20-%20%D0%92%D0%B0%D1%85%D1%82%D1%91%D1%80%D0%B0%D0%BC%20%28192kbps%29.mp3'
    },
    {
      id: 7,
      name: 'Горы по колено',
      album: 'Горы по колено',
      path: 'https://cdn7.sefon.pro/prev/CCRCd3q_2knMwqinukYd9w/1724822824/24/%D0%9C%D0%B0%D0%BA%D1%81%20%D0%9A%D0%BE%D1%80%D0%B6%20-%20%D0%93%D0%BE%D1%80%D1%8B%20%D0%9F%D0%BE%20%D0%9A%D0%BE%D0%BB%D0%B5%D0%BD%D0%BE%20%28192kbps%29.mp3'
    },
  ];

  getAllSongs() {
    return of(this.Records)
  }
}
