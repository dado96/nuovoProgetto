import { Component } from '@angular/core';
import { DiagnosiModels } from '../modelli/diagnosi/diagnosi.models';

@Component({
  selector: 'app-diagnosi',
  templateUrl: './diagnosi.component.html',
  styleUrls: ['./diagnosi.component.css']
})
export class DiagnosiComponent
{
  CFPaziente="";
  diagnositxt="";

  diagnosi: DiagnosiModels[]=[];
  
}
