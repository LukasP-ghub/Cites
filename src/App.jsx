import React from 'react';
import { useState, useEffect } from 'react';
import useCite from './hooks/useCite';
import Cite from './components/cite/Cite';
import Button from './components/button/Button';
import { RANDOM_CITE, PREV_CITE, NEXT_CITE } from './assets/constants';
import './App.scss';

export default function App() {
  const [cite, setToggleCite] = useCite(RANDOM_CITE);
  const [showCite, setShowCite] = useState(false);

  useEffect(() => {
    if (cite) {
      setShowCite(true);
    }

  }, [cite]);

  return (
    <main className={'layout'}>
      {showCite && <Cite cite={cite} />}
      <Button callback={() => { setShowCite(false); setToggleCite(PREV_CITE) }} text={PREV_CITE}></Button>
      <Button callback={() => { setShowCite(false); setToggleCite(NEXT_CITE) }} text={NEXT_CITE}></Button>
    </main>
  )
}
