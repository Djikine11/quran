import { Component, OnInit } from '@angular/core';
import { QuranService } from './quran.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  resp: any
  constructor(private Hservice: QuranService){}
  ngOnInit(): void {
      this.Hservice.connectBack().forEach((res) => {
        this.resp = res.data.ayahs
        console.log(this.resp)
      })
  }
  title = 'app';
}
