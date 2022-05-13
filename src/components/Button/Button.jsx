import React from 'react';

import bem from 'bem-cn';

import './Button.css';

const cn = bem('btn');

export default function Button({ url, text }) {
  return (
    <a
      className={cn()}
      href={url}
      title="ссылка"
      role="button"
      tabIndex="0"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
