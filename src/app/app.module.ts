import { NgModule,Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PazienteComponent } from './paziente/paziente.component';
import { EsameComponent } from './esame/esame.component';
import { DiagnosiComponent } from './diagnosi/diagnosi.component';
import { DottoreComponent } from './dottore/dottore.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    PazienteComponent,
    EsameComponent,
    DiagnosiComponent,
    DottoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor(library: FaIconLibrary) {
    library.addIcons (faGithub, faAngular);
  }
 }
