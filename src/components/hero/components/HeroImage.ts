import styled from 'styled-components';

export default styled.div`
  margin-top: -16rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);

  & [class=' gatsby-image-wrapper'],
  & img {
    display: block !important;
    max-width: 100%;

    @media (min-width: 1280px) {
      max-width: 130%;
    }

    @supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%)) {
      & {
        width: 100%;
      }
    }
  }

  & img {
    margin-bottom: 0;
  }

  @supports (clip-path: polygon(0 50%, 100% 0, 100% 100%)) {
    @media (min-width: 1280px) {
      & {
        margin-bottom: -24rem;
        margin-left: 50%;
        margin-top: 0;
        width: 50%;
        clip-path: polygon(0 50%, 100% 0, 100% 100%);
        overflow: hidden;
      }
    }
  }
`;
