import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Characters } from '../index';

const characterProps = {
  "id": 1011334,
  "name": "3-D Man",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    "extension": "jpg"
  },
  onClick: () => { },
  isSelected: true,
}


describe('Characters render testing', () => {
  test('component is rendered when props are passed', () => {
    const { container } = render(<Characters {...characterProps} />);
    expect(container).toBeInTheDocument()
  });
});
