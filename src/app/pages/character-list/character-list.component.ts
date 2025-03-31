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

  async ngOnInit() {
    this.characters = (await this.characterService.getAll()).items;
  }
}
