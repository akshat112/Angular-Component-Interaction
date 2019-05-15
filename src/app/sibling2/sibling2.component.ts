import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from '../sibling-interaction.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  public details = [];
  constructor(private _interaction: SiblingInteractionService) { }

  ngOnInit() {
    this.details = this._interaction.getDetails();
  }

}
