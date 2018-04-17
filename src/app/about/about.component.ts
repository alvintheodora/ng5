import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

import * as Highcharts from 'highcharts';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  public modalRef: BsModalRef; // {1}

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService, private modalService: BsModalService) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Fruit Consumption'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 19, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
  });
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
