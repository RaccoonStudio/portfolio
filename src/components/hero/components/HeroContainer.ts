import styled from 'styled-components';

export default styled.div`
  display: flex;
  margin: 0 auto;
  padding: 8rem 0 16rem;
  width: 85%;
  background: $color-gray-50;
  z-index: -3;

  @media (min-width: 1024px) {
    padding-left: 160px;
    padding-right: 160px;
    width: 1024px;
  }

  @media (min-width: 1280px) {
    padding-bottom: 0;
    width: 1280px;
  }
`;
