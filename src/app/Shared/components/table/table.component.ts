import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  columnsToDisplay = ['name', 'manaCost', 'set', 'type', 'artist'];
  @Input() cards: any;

  constructor(){}

  ngOnInit(){}
}
