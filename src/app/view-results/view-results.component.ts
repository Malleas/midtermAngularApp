import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent implements OnInit {

  @Input() results:number|any
  @Input() msg:string | any

  constructor() { }

  ngOnInit(): void {
  }

}
