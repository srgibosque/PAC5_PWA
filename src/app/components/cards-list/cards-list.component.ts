import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from '../../services/cards-service.service';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [];

   constructor(private cardService: CardsServiceService){}

   ngOnInit(): void {
      this.cardService.getCards(48)
      .subscribe((cards) => {
        if(cards){
          this.cards = cards.cards;
          console.log(this.cards);
        }
      });
   }
}
