import React from 'react';

import bem from 'bem-cn';

import Links from '../Links/Links';

import './Card.css';

const cn = bem('card');

export default function Card({
  image,
  text,
  subtext,
  link,
  linkIOS,
  linkAndroid,
}) {
  return (
    <div className={cn()}>
      <div
        className={cn('img')}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={cn('text')}>
        {text}
      </div>
      <div className={cn('subtext')}>
        {subtext}
      </div>
      <Links
        link={link}
        linkIOS={linkIOS}
        linkAndroid={linkAndroid}
        label={text}
      />
    </div>
  );
}
