import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  texto: String = "Angular Estudos";
  cursoAngular:boolean = true;
  urlImagem = 'http://lorempixel.com/output/city-q-c-421-156-5.jpg';

  getValor(){
      return 1;
  }

 getCurtirCurso(){
    return true;
 }

  constructor() { }

  ngOnInit() {
  }

}
