import { ICharacterList } from './../../models/icharacterList';
import { Component, OnInit } from '@angular/core';
import { GetFromApiService } from 'src/app/pages/services/get-from-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characterList: ICharacterList[] = [];

  constructor(private getFromApiService: GetFromApiService) { }

  ngOnInit(): void {
    this.recoverList();
  }

  public recoverList(){
    this.getFromApiService.getData("character")
    .subscribe ((data: any) => {
      const results: ICharacterList[] = data.results;
      const formattedResults = results.map (({name, image}) => ({
        name,
        image,
      }));
      this.characterList = formattedResults;
    }
    );
  }
}
