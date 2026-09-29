import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kabala } from '../models/Kabala.model';

@Injectable({
  providedIn: 'root',
})
export class KabalotSRV {

  constructor(private httpClayent: HttpClient) {
   }

  subjectCode: number[] = [1, 2, 3, 4, 5];
  subjectDiscription: string[] = ['Tefila', 'Tzniut', 'Shabbos', 'Tehilim', 'Midos'];

  // getKabalotList(): Observable<Kabala[]>{
  //   const kabalotList = this.httpClayent.get('src\app\kabalos-data.json');
  //   return kabalotList;
  // }
  
}
