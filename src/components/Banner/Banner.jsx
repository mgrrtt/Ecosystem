import React from 'react';

import bem from 'bem-cn';

import './Banner.css';

const cn = bem('banner');

export default function Banner() {
  return (
    <div className={cn()}>
      <div className={cn('wrapper')}>
        <div className={cn('info')}>
          <div className={cn('title')}>
            Экосистема
          </div>
          <div className={cn('text')}>
            Онлайн-сервисы для повседневной жизни и&nbsp;работы
          </div>
        </div>
        <div className={cn('image')} />
      </div>
    </div>
  );
}
