import { Component } from '@angular/core';
import { DottoreModels } from '../modelli/dottore/dottore.models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dottore',
  templateUrl: './dottore.component.html',
  styleUrls: ['./dottore.component.css']
})
export class DottoreComponent
{
  id=0;
  nomeDottore="";
  specializzazione="";

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  dottore:DottoreModels[]=[];

}
