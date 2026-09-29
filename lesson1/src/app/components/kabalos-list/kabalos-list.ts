import { Component } from '@angular/core';
import { Kabala } from '../../models/Kabala.model';
import { Kabalos } from '../kabalos/kabalos';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import  { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { KabalotService } from '../../services/Kabalot.service';
@Component({
  selector: 'app-kabalos-list',
  imports: [Kabalos,CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './kabalos-list.html',
  styleUrl: './kabalos-list.css',
})
export class KabalosList {

  constructor(private kabalotServise: KabalotService, private router: Router, private activatedRoute: ActivatedRoute){}

  kabalaList: Kabala[] = [];
  emptyKabala: Kabala = new Kabala();
  selectedIndex: number = 0;

  ngOnInit(){
    this.kabalotServise.getKabalotList().subscribe(data => {
      this.kabalaList = data;
    })
  }
  get selectedKabala(): Kabala {
    return this.kabalaList[this.selectedIndex] ?? this.emptyKabala;
  }

  set selectedKabala(k: Kabala) {
    if (this.selectedIndex >= 0)
      this.kabalaList[this.selectedIndex] = k;
  }

  savaNewKabala(K : Kabala){
    this.kabalaList.push(K);
  }

  addNew() {
    this.emptyKabala = new Kabala();
    this.selectedIndex = -1;
  }

  selectedChanged(index: number){
    this.selectedIndex = index;
    this.router.navigate(['edit/'+this.kabalaList[index].id], {relativeTo: this.activatedRoute});
  }

}
