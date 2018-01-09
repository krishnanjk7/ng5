import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-ajax',
  templateUrl: './with-ajax.component.html',
  styleUrls: ['./with-ajax.component.css']
})
export class WithAjaxComponent implements OnInit {

  constructor() { }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'http://localhost:4200/src/app/data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

}
