import React from 'react';
import { AppLayout } from './style';
import { Marvel } from './components/marvel';
import { MarvelUniverse } from './logics/marvelUniverse';

function App() {
  return (
    <AppLayout id='App'>
      <MarvelUniverse>
        <Marvel />
      </MarvelUniverse>
    </AppLayout>
  );
}

export default App;
