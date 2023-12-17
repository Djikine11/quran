import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuranService {
APIUrl = 'https://api.alquran.cloud/v1/surah/18'
  constructor(private http: HttpClient) { }

connectBack(): Observable<any>
{
  return this.http.get(this.APIUrl)
}
}
