import { Component } from '@angular/core';
import { AppModule} from './app.module';
import { AppComponent} from './app.component';
import { ServiceComponent} from './service.component';

@Component({
  selector: 'app-root',
  templateUrl: './maintop.component.html',
  styleUrls: ['./app.component.css']
})
export class MaintopComponent {
  title = '～公的介護保険制度の現状と今後の役割～';

}
