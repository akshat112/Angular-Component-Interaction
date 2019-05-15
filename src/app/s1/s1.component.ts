import { Component, OnInit } from '@angular/core';
import { TsServiceService } from '../ts-service.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private interaction: TsServiceService) { }

  ngOnInit() {
  }

  greetStudent(){
    this.interaction.sendMessage("Good morning!");
  }

  appreciateStudent(){
    this.interaction.sendMessage("Good!");
  }

}
