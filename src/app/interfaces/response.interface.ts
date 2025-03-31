import { Character } from './character.interface';
import { Meta } from './meta.interface';
import { Links } from './links.interface';

export interface IResponse {
  items: Character[];
  meta: Meta;
  links: Links;
}
