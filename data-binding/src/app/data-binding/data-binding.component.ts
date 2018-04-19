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
  valorAtual: String = "";
  valorSalvo: String = "";

  isMouseOver: boolean = false;

  nome:string = "ABC";

  pessoa = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: String = "Angular"

  getValor(){
      return 1;
  }

 getCurtirCurso(){
    return true;
 }

 btnClicado(){
   alert('Botão Clicado')
 }


  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }


  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


 onMudouValor(evento){
   console.log(evento.novoValor);
 }

  constructor() { }

  ngOnInit() {
  }

}
