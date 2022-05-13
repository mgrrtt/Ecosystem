import React, { useState } from 'react';

import bem from 'bem-cn';

import './Menu.css';

const cn = bem('eco-menu');

export default function Menu({ options = [] }) {
  const [active, setActive] = useState(0);

  return (
    <div className={cn()}>
      {
        options.map(({ title, id }, i) => (
          <a 
            key={id}
            href={`#${title}`}
            role="button"
            tabIndex="0"
            className={cn('item', { act: i === active })}
            onClick={() => setActive(i)}
          >
            {title}
          </a>
        ))
      }
    </div>
  );
}
