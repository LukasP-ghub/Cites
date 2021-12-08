import React, { useEffect, useState } from 'react'
import './Cite.scss';

export default function Cite({ cite: { quote, author } }) {
  const [showCite, setShowCite] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowCite('showCite');
    }, 20);
  }, [])

  return (
    <figure className={`cite ${showCite}`}  >
      <blockquote>
        <p className={'cite-text'}>{quote}</p>
      </blockquote>
      <figcaption className={'cite-author'}>{author}</figcaption>
    </figure>
  )
}
