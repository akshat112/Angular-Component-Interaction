import { Component, OnInit } from '@angular/core';
import { TsServiceService } from '../ts-service.service';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css']
})
export class S2Component implements OnInit {

  constructor(private interaction: TsServiceService) { }

  ngOnInit() {
    this.interaction.message$
      .subscribe(message => {
        if(message === "Good morning!")
          alert("Good morning teacher");
        else if(message === "Good!")
          alert("Thank you!");
      })
  }

}
