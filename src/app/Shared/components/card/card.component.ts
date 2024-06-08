import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../models/card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() card!: Card

  constructor(private router: Router){}

  ngOnInit() {}

  navigateToDetail(card: Card): void {
    this.router.navigate(['/card', card.id]);
  }
}
