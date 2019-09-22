import styled from 'styled-components';

export default styled.span`
  display: block;
  margin-bottom: 1.6rem;
  color: #cccccc;
  font-size: 2.4rem;
  font-weight: 200;

  @media (min-width: 640px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.8rem;
  }

  & > span:not(:last-child) {
    padding-right: 0.25em;
  }
`;
