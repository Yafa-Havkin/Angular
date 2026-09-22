import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Kabala } from '../../models/Kabala.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kabalos',
  imports: [FormsModule, CommonModule],
  templateUrl: './kabalos.html',
  styleUrl: './kabalos.css',
})
export class Kabalos {
  @Input()
  Kabala: Kabala = new Kabala();
  @Output()
  KabalaChange: EventEmitter<Kabala> = new EventEmitter<Kabala>();
  @Output()
  addKabala: EventEmitter<Kabala> = new EventEmitter<Kabala>();
  enabledSave: boolean = false;
  subjectCode: number[] = [1, 2, 3, 4, 5];
  subjectDiscription: string[] = ['Tefila', 'Tzniut', 'Shabbos', 'Tehilim', 'Midos'];
  isNew: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Kabala']) {
      this.isNew = !changes['Kabala'].currentValue?.id;
    }
  }

  save(){
    if(this.isNew)
     this.addKabala.emit(this.Kabala);
    else{
      this.KabalaChange.emit(this.Kabala);
    }
  }

  setEnabled() {
    this.enabledSave = true;
  }
}
