import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estaLogueado: boolean = true;
  nuevoUsuario: boolean = false;

  lenguajeProgramacion: string [] = ['Javascript','Python','Java','C/C++','PHP', 'C#']; 


  flagStiloClass: boolean = true;

  cambiarFlag(){
    this.flagStiloClass = !this.flagStiloClass;
  }

}
