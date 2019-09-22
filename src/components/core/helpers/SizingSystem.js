const SizingSystem = {}

SizingSystem.values = {
  unit: '.1rem',
  double: '.2rem',
  triple: '.3rem',
  demi: '.4rem',
  base: '.8rem',
  decimal: '1rem',
  small: '1.2rem',
  medium: '1.6rem',
  large: '2.4rem',
  extraLarge: '3.2rem',
  full: '4rem',
  wide: '4.8rem',
  wider: '5.6rem'
}

SizingSystem.blocks = {
  tablet: '85%',
  laptop: '1024px',
  desktop: '128px'
}

SizingSystem.margins = {
  paragraph: '2em',
  pre: SizingSystem.values.large
}

SizingSystem.media = {
  tablet: '640px',
  laptop: '1024px',
  desktop: '1280px'
}

export default SizingSystem
