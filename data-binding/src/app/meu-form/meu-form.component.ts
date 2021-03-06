import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {


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






  constructor() { }

  ngOnInit() {
  }

}
