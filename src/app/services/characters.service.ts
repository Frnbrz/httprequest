import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { lastValueFrom } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  httpClient = inject(HttpClient);
  private readonly url = 'https://dragonball-api.com/api/characters';

  getAll(): Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.url));
  }

  async getById(id: number): Promise<Character> {
    return lastValueFrom(this.httpClient.get<Character>(`${this.url}/${id}`));
  }
}
