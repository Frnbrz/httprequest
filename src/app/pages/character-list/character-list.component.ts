import { Component, inject } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';
import { IResponse } from '../../interfaces/response.interface';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

@Component({
  selector: 'app-character-list',
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  characters: Character[] = [];
  characterService = inject(CharactersService);
  pageNext: string = '';
  pagePrev: string = '';

  async ngOnInit() {
    this.getData();
  }

  async getData(url: string | undefined = undefined) {
    const response: IResponse = await this.characterService.getAll(url);
    this.characters = response.items;
    this.pageNext = response.links.next;
    this.pagePrev = response.links.previous;

    console.log('next' + this.pageNext, 'prev' + this.pagePrev);
  }

  onNextPage() {
    this.getData(this.pageNext);
  }
  onPrevPage() {
    this.getData(this.pagePrev);
  }
}
