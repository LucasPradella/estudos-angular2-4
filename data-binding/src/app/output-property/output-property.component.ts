import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor= 0;

  @Output() mudouValor = new EventEmitter();

  inClementa(){
    this.valor++
    this.mudouValor.emit({novoValor : this.valor})
  }

  deClementa(){
    this.valor--
    this.mudouValor.emit({novoValor : this.valor})
  }
  constructor() { }

  ngOnInit() {
  }

}
