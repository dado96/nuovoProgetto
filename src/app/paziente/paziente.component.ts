import { Component } from '@angular/core';
import { PazienteModels } from '../modelli/paziente/paziente.models';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.component.html',
  styleUrls: ['./paziente.component.css']
})
export class PazienteComponent
{
  fiscalCode= "";
  nome = "";
  cognome= "";
  eta = 0;
  comune ="";
  

  users: PazienteModels[] = [];
}
