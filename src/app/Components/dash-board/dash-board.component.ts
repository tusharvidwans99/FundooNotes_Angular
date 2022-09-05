import { Component,Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  selectedMenu:any='dashboard';
  isArchive: boolean=false;
  @Input() NoteList:any;


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goTo(paramText:string){
    this.selectedMenu = paramText;
    console.log(paramText);
    
  }

  notes(){
    this.route.navigateByUrl('DashBoard/Notes');
  }

  trash() {
    this.route.navigateByUrl('DashBoard/Trash')
  }

  archive(){
    this.route.navigateByUrl('DashBoard/Archive')
  }

}
