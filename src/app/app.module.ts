import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MaintopComponent} from './maintop.component';
import { ServiceComponent} from './service.component';
import { MemoComponent} from './memo.component';
import { AsunaroComponent} from './asunaro.component';

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule} from 'ng2-bootstrap/modal';

export const ROUTES = [
 {path : 'Service' , component: ServiceComponent},
 {path : 'Maintop', component:MaintopComponent},
 {path: 'Memo', component:MemoComponent},
 {path: 'Asunaro', component :AsunaroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    MaintopComponent,
    MemoComponent,
    AsunaroComponent
  ],
  imports: [
    Ng2BootstrapModule,
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      ROUTES
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
