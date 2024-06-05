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
  isLoading: boolean = false;

   constructor(private cardService: CardsServiceService){}

   ngOnInit(): void {
      this.isLoading = true;
      this.cardService.getCards(48)
      .subscribe((cards) => {
        this.isLoading = false;
        if(cards){
          this.cards = cards.cards;
          console.log(this.cards);
        }
      }, (err) => {
        this.isLoading = false; 
        console.error(err);
      });
   }
}
