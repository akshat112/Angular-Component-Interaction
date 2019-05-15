import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { SiblingInteractionService } from './sibling-interaction.service';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    S1Component,
    S2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [SiblingInteractionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
