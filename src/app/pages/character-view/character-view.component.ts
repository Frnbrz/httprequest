import { Component, inject, Input } from '@angular/core';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { Character } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-character-view',
  imports: [CharacterCardComponent],
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.css',
})
export class CharacterViewComponent {
  @Input() idCharacter: string = '';
  characterService = inject(CharactersService);
  character: Character | undefined;

  async ngOnInit() {
    this.character = await this.characterService.getById(
      Number(this.idCharacter)
    );
  }
}
