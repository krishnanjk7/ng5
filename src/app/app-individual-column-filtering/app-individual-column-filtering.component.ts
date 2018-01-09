import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-app-individual-column-filtering',
  templateUrl: './app-individual-column-filtering.component.html',
  styleUrls: ['./app-individual-column-filtering.component.css']
})
export class AppIndividualColumnFilteringComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

}
