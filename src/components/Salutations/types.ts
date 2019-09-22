export interface Salutation {
  lang: string;
  content: string;
}

export interface SalutationsProps {
  salutations?: Salutation[];
}
