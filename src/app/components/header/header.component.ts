import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  players = [
    "Fetch Data",
    "Send Data",
  ]
  selected = "";

  update(e:any){
    this.selected = e.target.value
  }

  constructor() { }

  ngOnInit(): void {
  }



}
