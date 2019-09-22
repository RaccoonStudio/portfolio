import styled from 'styled-components';

export default styled.span`
  margin: 0;
  width: 600px;
  background-color: #333333;
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: 200;
  line-height: 1.3;
  z-index: 1;

  @media (min-width: 640px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  & > strong {
    font-weight: 500;
  }
`;
