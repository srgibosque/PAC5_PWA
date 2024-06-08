import { Component } from '@angular/core';
import { ViewModeService } from '../../services/view-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private viewMode: ViewModeService){}

  activateCardView(){
    this.viewMode.setViewMode(true);
  }

  activateTableView(){
    this.viewMode.setViewMode(false);
  }
}
