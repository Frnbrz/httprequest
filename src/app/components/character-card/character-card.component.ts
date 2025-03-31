import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  imports: [RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {
  @Input() character: Character | undefined;
}
