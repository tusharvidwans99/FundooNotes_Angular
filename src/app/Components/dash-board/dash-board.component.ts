import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  searchTerm : String ="";
  selectedMenu:any='Notes';


  constructor() { }

  ngOnInit(): void {
  }

  goTo(paramText:string){
    this.selectedMenu = paramText;
  }

}
