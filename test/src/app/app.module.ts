import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';

import { NgaCardComponent } from '../../../framework/theme/src/layout/nga-card/nga-card.component';
import {
  NgaCardHeaderComponent,
}
  from '../../../framework/theme/src/layout/nga-card/nga-card-header/nga-card-header.component';
import {
  NgaCardBodyComponent,
}
  from '../../../framework/theme/src/layout/nga-card/nga-card-body/nga-card-body.component';
import {
  NgaCardFooterComponent,
}
  from '../../../framework/theme/src/layout/nga-card/nga-card-footer/nga-card-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NgaCardTestComponent,
    NgaCardComponent,
    NgaCardHeaderComponent,
    NgaCardBodyComponent,
    NgaCardFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
