import { Component, Input, OnInit } from '@angular/core';
import { IMain } from '../../models/rick-model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
@Input() public main!: IMain; 
  constructor() { }

  ngOnInit(): void {
  }

}
