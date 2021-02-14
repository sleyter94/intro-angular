import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeEliminado: string = '';

  borrarHeroe() {
    this.heroeEliminado = this.heroes.shift() || '';
  }

}
