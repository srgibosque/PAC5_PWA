import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from '../../services/cards-service.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent implements OnInit {
   constructor(private cardService: CardsServiceService){}

   ngOnInit(): void {
       this.cardService.getCards().subscribe((cards) => {
        console.log(cards);
       });
   }
}
