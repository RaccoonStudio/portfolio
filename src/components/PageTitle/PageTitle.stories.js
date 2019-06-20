import React from 'react';

import { storiesOf } from '@storybook/react';
import PageTitle from './PageTitle';

storiesOf('PageTitle', module)
  .add('overview', () => <PageTitle>Hello World!</PageTitle>);
