import { Component, Input, OnInit } from '@angular/core';

interface ColumnDefinition {
  header: string;
  property: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input() data!: any[];
  @Input() columns!: ColumnDefinition[];

  columnsToDisplay!: string[];

  constructor(){}

  ngOnInit(){
    this.columnsToDisplay = this.columns.map(col => col.property);
  }
}
