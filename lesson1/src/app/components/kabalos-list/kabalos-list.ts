import { Component } from '@angular/core';
import { Kabala } from '../../models/Kabala.model';
import { Kabalos } from '../kabalos/kabalos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-kabalos-list',
  imports: [Kabalos,CommonModule],
  templateUrl: './kabalos-list.html',
  styleUrl: './kabalos-list.css',
})
export class KabalosList {
  kabalaList : Kabala[] = [{id:11,name:'מחשבה טובה',description:'לחשוב משהו טוב על עצמי',subject: 1,weight: 2},
    {id:12,name:'לשון הרע',description:'ללמוד 10 הלכות של לשון הרע',subject: 3,weight: 3},
    {id:13,name:'פתח צוואר',description:'לסגור את פתח הצוואר של החולצה הירוקה',subject: 2,weight: 5},
    {id:14,name:'לקראת שבת',description:'לקבל שבת 10 דקות לפני הזמן',subject: 4,weight: 3}
  ];

  selectedIndex: number = 0;

}
