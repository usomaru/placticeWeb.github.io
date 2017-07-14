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

piesData: any = [
    {
      "time": 25,
      "count": 2.3,
      "name": "国",
    },
    {
      "time": 12.5,
      "count": 1.4,
      "name": "都道府県負担金",
    },
    {
      "time": 12.5,
      "count": 1.2,
      "name": "市町村負担金",
    },
    {
      "time": 28,
      "count": 2.7,
      "name": "第2号被保険者の保険料",
    },
     {
      "time": 22,
      "count": 2.1,
      "name": "第1号被保険者の保険料",
    },
  ];

  pieData: any = [
    {
      "name":"居宅サービス",
      "money":255.9,
      "hiritu":67
    },
    {
      "name": "地域密着型サービス",
      "money":34,
      "hiritu":9,
    },
    {
      "name":"施設サービス",
      "money":89.5,
      "hiritu":24
    }
  ];

  pieallData: any = [
    {
      "name":"居宅サービス",
      "money":3173,
      "hiritu":46
    },
    {
      "name": "地域密着型サービス",
      "money":794,
      "hiritu":12
    },
    {
      "name":"施設サービス",
      "money":2880,
      "hiritu":42
    }
  ]
}
