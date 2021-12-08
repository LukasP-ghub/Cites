import React, { useState } from 'react';
import { NEXT_CITE, PREV_CITE } from '../../assets/constants';
import './Button.scss';

export default function Button({ callback, text }) {
  const [clickClass, setClickClass] = useState(null);
  const variantClass = new Map([[NEXT_CITE, 'nextBtn'], [PREV_CITE, 'prevBtn']]).get(text);

  return (
    <button onClick={() => { callback(); setClickClass('shake'); }} onAnimationEnd={() => setClickClass(null)} className={`${variantClass} ${clickClass} btn`}>{text}</button>
  )
}
