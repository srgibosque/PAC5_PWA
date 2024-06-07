import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsServiceService } from '../../services/cards-service.service';
import { Card } from '../../models/card.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent implements OnInit {
  card!: Card;
  isLoading: boolean = false;
  showMore: boolean = false;

  constructor(
    private cardService: CardsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    
    if(id){
      this.cardService.getCardByID(id)
        .subscribe((card) => {
          this.card = card.card;
          this.isLoading = false;
        });
    }
  }

  activateShowMore(){
    this.showMore = true;
  }
}
