import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any; // aceita qualquer valor
//   cursos: string[] = ['java', 'Ext TS', 'Angular']; isso foi tranportado para o service
 cursos: string[];
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'Vai Corinthians';

     // var servico = new CursosService();  // sem injeção de dependencia
   this.cursos = this.cursosService.getCursos();


   }

  ngOnInit() {
  }

}
