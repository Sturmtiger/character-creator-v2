import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveDecor from './components/PerspectiveDecor'

function App() {
  return (
    <>
      <PerspectiveDecor />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
