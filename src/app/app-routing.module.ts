import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';

const routes: Routes = [
  {path: '', component: CardsListComponent},
  {path: 'card/:id', component: CardItemComponent},
  {path: '**', component: CardsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
