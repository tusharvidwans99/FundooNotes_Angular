import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

// @Output() arrayevent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  chr =['a','b','c','d','e','f'];



}
