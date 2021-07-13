import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items = [1,2,3,5]
  public dataSetItems = [
    {
      name:"New User",
      value: 34,
      icon: "bi bi-person-fill",
      color:"progress-bar bg-info",
      textColor: "text-info"
    },
    {
      name:"Today",
      value: 18,
      icon: "bi bi-newspaper",
      color:"progress-bar bg-success",
      textColor: "text-success"
    },
    {
      name:"Open Issue",
      value: 46,
      icon: "bi bi-info-lg",
      color: "progress-bar bg-warning",
      textColor: "text-warning"
    },
    {
      name:"New Project",
      value: 12,
      icon: "bi bi-folder",
      color: "progress-bar bg-danger",
      textColor: "text-danger"
    }


  ];

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }

}
