import React from 'react';
import { Salutation, SalutationsBlock } from './components';
import { SalutationsProps } from './types';

const Salutations = ({ salutations }: SalutationsProps): React.ReactElement<SalutationsProps> => (
  <SalutationsBlock>
    {salutations &&
      salutations.map((item, index) => (
        <Salutation lang={item.lang} key={index}>
          {item.content}
        </Salutation>
      ))}
  </SalutationsBlock>
);

export default Salutations;
