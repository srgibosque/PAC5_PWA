import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Card } from '../../models/card.interface';

import { CardsServiceService } from '../../services/cards-service.service';
import { ViewModeService } from '../../Shared/services/view-mode.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
  animations:[
    trigger('fadeInOut', [
      state('void', style({opacity: 0.2})),
      transition('void <=> *', animate(1000)),
    ])
  ],
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [];
  isLoading: boolean = false;
  cardView: boolean = true;

  constructor(
    private cardService: CardsServiceService, 
    private viewModeService: ViewModeService,
  ){}

  ngOnInit(): void {
    this.isLoading = true;
    this.cardService.getCards(64)
    .subscribe((cards) => {
      this.isLoading = false;
      if(cards){
        this.cards = cards.cards.filter(card => card.imageUrl);
      }
    }, (err) => {
      this.isLoading = false; 
      console.error(err);
    });

    this.viewModeService.viewMode$.subscribe((isCardView) => {
      this.cardView = isCardView;
    })
  }

}
