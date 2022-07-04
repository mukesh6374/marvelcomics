import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Carousel } from '../index';

const carouselProps = {
  characters: [
    {
        "id": 1011334,
        "name": "3-D Man",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
          "extension": "jpg"
        }
      }
  ],
  selectedCharacterIds: [1010699, 1009144, 1017100, 1009146, 1016823],
  onSelectCharacter: () => { }
}


describe('Carousel render testing', () => {
  test('component is rendered when props are passed', () => {
    const { container } = render(<Carousel {...carouselProps} />);
    expect(container).toBeInTheDocument()
  });
});
