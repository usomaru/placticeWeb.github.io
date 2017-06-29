import { Component } from '@angular/core';
import { AppModule} from './app.module';
import { MaintopComponent} from './maintop.component';
import { AppComponent} from './app.component';


@Component({
  selector: 'app-root',
  templateUrl: './service.component.html',
  styleUrls: ['./app.component.css']
})
export class ServiceComponent {
  title = '～介護サービス一覧/サービス紹介～';

}
