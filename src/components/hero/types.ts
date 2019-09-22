import { FixedObject } from 'gatsby-image';
import { Salutation } from '../Salutations/types';

export interface HeroProps {
  componentId?: string;
  heroImage?: FixedObject;
  salutations?: Salutation[];
}
