import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
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
  addKabala: EventEmitter<Kabala> = new EventEmitter<Kabala>();
  enabledSave: boolean = false;
  subjectCode: number[] = [1, 2, 3, 4, 5];
  subjectDiscription: string[] = ['Tefila', 'Tzniut', 'Shabbos', 'Tehilim', 'Midos'];
  isNew: boolean = true;

  ngOnChanges(): void {
    if (this.Kabala.id && this.Kabala.id > 0) {
      this.isNew = false;
    } else this.isNew = true;
  }

  addKabalaFunc(){
    this.addKabala.emit(this.Kabala);
  }

  setEnabled() {
    this.enabledSave = true;
  }
}
