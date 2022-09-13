import { Component,Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/dataservice/data-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  selectedMenu:any='dashboard';
  @Input() NoteList:any;


  constructor(private route: Router, private dataService:DataServiceService) { }

  ngOnInit(): void {
  }

  searchNote(event:any)
  {
      console.log("event",event.target.value)
      this.dataService.changeMessage(event.target.value)
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

  logOut(){
    console.log("stored: "+localStorage.getItem('token'));
    
    localStorage.removeItem('token');
    console.log("Delted: "+ localStorage.getItem('token'));
    this.route.navigateByUrl('/Login')
  }

}
