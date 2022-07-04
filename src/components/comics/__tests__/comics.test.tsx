import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Comics } from '../index';

const comicsProps = {
  comics: [
    {
      "id": 47176,
      "digitalId": 30661,
      "title": "FREE COMIC BOOK DAY 2013 1 (2013) #1",
      "issueNumber": 1,
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3",
        "extension": "jpg"
      }
    },
    {
      "id": 40628,
      "digitalId": 27099,
      "title": "Hulk (2008) #55",
      "issueNumber": 55,
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5ba3d0869c543",
        "extension": "jpg"
      }
    },
    {
      "id": 40630,
      "digitalId": 26830,
      "title": "Hulk (2008) #54",
      "issueNumber": 54,
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2",
        "extension": "jpg"
      }
    },
    {
      "id": 40632,
      "digitalId": 26673,
      "title": "Hulk (2008) #53",
      "issueNumber": 53,
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a",
        "extension": "jpg"
      }
    }
  ]
}


describe('Comics render testing', () => {
  test('component is rendered when props are passed', () => {
    const { container } = render(<Comics {...comicsProps} />);
    expect(container).toBeInTheDocument()
  });
});
