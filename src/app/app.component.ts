import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MP3Record} from "./models/MP3Record";
import {AudioService} from "./services/audio.service";
import {map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  displayColumns = ['id', 'name', 'album', 'play'];
  dataToDisplay!: MP3Record[];
  audioSrc?: string;
  private $destroy= new Subject<void>();
  @ViewChild('audioPlayer', {static: true}) audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private audioService: AudioService) {
  }

  play(src: string) {
    this.audioSrc = src;
    this.audioPlayer?.nativeElement.load();
  }

  ngOnInit(): void {
    this.audioService.getAllSongs().pipe(
      takeUntil(this.$destroy),
      map((items:MP3Record[])=>this.dataToDisplay = items)
    ).subscribe(_=>_);
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete()
  }
}
