import {ChangeDetectionStrategy, Component} from '@angular/core';
export interface MP3Record {
  id: number;
  name: string;
  album: string;
}


const Records: MP3Record[] = [
  {id: 1, name: 'Моя Игра', album: 'Хлеб'},
  {id: 2, name: 'Ocean Drive', album: 'Ocean Drive'},
  {id: 3, name: 'Lonely Day', album: 'Hypnotize'},
  {id: 4, name: 'Legendary', album: 'Legends Never Die'},
  {id: 5, name: 'I Wanna Be Yours', album: 'AM'},
  {id: 6, name: 'Вахтерам', album: 'Солдатский альбом'},
  {id: 7, name: 'Горы по колено', album: 'Горы по колено'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  displayColumns = ['id', 'name', 'album', 'play'];
  dataToDisplay = [...Records];
}
