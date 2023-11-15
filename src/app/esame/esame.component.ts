import { Component } from '@angular/core';
import { EsameModels } from '../modelli/esame/esame.models';

@Component({
  selector: 'app-esame',
  templateUrl: './esame.component.html',
  styleUrls: ['./esame.component.css']
})
export class EsameComponent
{
  CFPaziente= "";
  Esamitxt= "";

esame: EsameModels[]=[];

}
