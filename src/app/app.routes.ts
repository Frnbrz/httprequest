import { Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterViewComponent } from './pages/character-view/character-view.component';

export const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: 'character/:idCharacter',
    component: CharacterViewComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
