import styled from 'styled-components';

export default styled.section`
  position: relative;
  color: #333333;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    height: 105%;
    content: '';
    background: #333333;
    transition: clip-path 1s ease-in-out, height 1s ease-in-out;
    z-index: 1;

    @supports (clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%)) {
      clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
    }

    @supports (clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%)) {
      @media (min-width: 1280px) {
        height: 720px;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
      }
    }
  }
`;
