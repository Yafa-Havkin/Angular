import { Component } from '@angular/core';
import { Kabala } from '../../models/Kabala.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kabalos',
  imports: [FormsModule,CommonModule],
  templateUrl: './kabalos.html',
  styleUrl: './kabalos.css',
})
export class Kabalos {
  K : Kabala = new Kabala ();
  enabledSave : boolean = false;
  subjectCode: number[] = [1,2,3,4,5];
  subjectDiscription: string[] = ['Tefila','Tzniut','Shabbos','Tehilim','Midos'];

  ngOnInit(){
    this.K.description = 'לקרא תהילים לאחר כל הפסקה';
    this.K.name = 'תהילים';
    this.K.subject = 5;
    this.K.weight = 3;
  }

  setEnabled(){
    this.enabledSave = true;
  }


}
