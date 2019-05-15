import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from '../sibling-interaction.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  public details =[];
  constructor(private _interactionService: SiblingInteractionService) { }

  ngOnInit() {
    this.details = this._interactionService.getDetails();
  }

}
