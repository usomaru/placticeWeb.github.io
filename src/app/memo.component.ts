import { Component } from '@angular/core';
import { AppModule} from './app.module';
import { MaintopComponent} from './maintop.component';
import { AppComponent} from './app.component';

@Component({
  selector: 'app-root',
  templateUrl: './memo.component.html',
  styleUrls: ['./app.component.css']
})
export class MemoComponent {
  title = '～memo・用語とか～';

}
