import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../../models/rick-model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
@Input() public hero!: IHero
  constructor() { }

  ngOnInit(): void {
  }

}
