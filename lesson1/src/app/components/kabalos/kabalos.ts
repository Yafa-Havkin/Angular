import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Kabala } from '../../models/Kabala.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kabalos',
  imports: [CommonModule, ReactiveFormsModule],
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
  subjectCode: number[] = [1, 2, 3, 4, 5];
  subjectDiscription: string[] = ['Tefila', 'Tzniut', 'Shabbos', 'Tehilim', 'Midos'];
  isNew: boolean = true;
  frmKabala: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.minLength(5), Validators.maxLength(15)]),
    subject: new FormControl(''),
    weight: new FormControl(2),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['Kabala'] && !changes['Kabala'].currentValue) {
      this.Kabala = new Kabala();
      this.isNew = true;
      this.frmKabala.patchValue(changes['Kabala'].currentValue ?? {});
    } else {
      this.frmKabala = new FormGroup({
        name: new FormControl(this.Kabala.name, Validators.required),
        description: new FormControl(this.Kabala.description, [
          Validators.minLength(5),
          Validators.maxLength(15),
        ]),
        subject: new FormControl(this.Kabala.subject),
        weight: new FormControl(this.Kabala.weight),
      });
      this.isNew = !changes['Kabala'].currentValue?.id;
    }
  }

  save() {
  const k = { ...this.Kabala, ...this.frmKabala.value };
  if (this.isNew) this.addKabala.emit(k);
  else this.KabalaChange.emit(k);
}

}
