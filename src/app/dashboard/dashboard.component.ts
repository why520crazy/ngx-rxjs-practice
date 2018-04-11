import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public todos: string[] = [];

  constructor(private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.data.subscribe((todos: string[]) => {
      //this.todos = todos;
    });
  }

}
