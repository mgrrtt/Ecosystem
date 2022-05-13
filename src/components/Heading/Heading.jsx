import React from 'react';

import bem from 'bem-cn';

import './Heading.css';

const cn = bem('heading');

export default function Heading({ text }) {
  return (
    <div
      className={cn()}
    >
      {text}
    </div>
  );
}
