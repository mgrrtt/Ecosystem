import React, { useState, useRef, useEffect } from 'react';

import bem from 'bem-cn';

import { checkIsIOS } from '../../utils';

import './Links.css';

const cn = bem('links');

export default function Modal({
  link,
  linkIOS,
  linkAndroid,
}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [windowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const more = useRef();
  const a = useRef();

  const isIOS = checkIsIOS();

  useEffect(() => {
    if (windowWidth < 1024) {
        setIsMobile(true);
    }
  }, [windowWidth]);

  const handleOuterClick = e => {
    if (e.target !== more.current && e.target !== a.current) {
        setIsShowModal(false);
    }
  };

  const handleMoreKeyDown = e => {
    if ((e.which === 13 || e.which === 32)) {
      e.preventDefault();

      setIsShowModal(!isShowModal)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOuterClick);

    return () => window.removeEventListener('click', handleOuterClick);
  }, []);

  return (
    <div className={cn()}>
      <div
          ref={more}
          role="button"
          tabIndex="0"
          className={cn('link', { toggle: true, act: isShowModal })}
          onClick={() => setIsShowModal(!isShowModal)}
          onKeyDown={handleMoreKeyDown}
      >
          Подробнее
      </div>
      {
        isShowModal && (
        <div className={cn('hide')}>
          {
            ((linkIOS && isMobile && isIOS) || (linkIOS && !isMobile)) &&
            <a
              ref={a}
              href={linkIOS}
              role="button"
              tabIndex="0"
              title="ссылка на скачивание IOS приложения"
              target="_blank"
              rel="noopener noreferrer"
              className={cn('link')}
            >
              Скачать в App Store
            </a>
          }
          {
            ((linkAndroid && isMobile && !isIOS) || (linkAndroid && !isMobile)) &&
            <a
              ref={a}
              href={linkAndroid}
              role="button"
              tabIndex="0"
              title="ссылка на скачивание Android приложения"
              target="_blank"
              rel="noopener noreferrer"
              className={cn('link')}
            >
              Скачать в Google Play
            </a>
          }
          {
            link &&
            <a
              ref={a}
              href={link}
              role="button"
              tabIndex="0"
              title="ссылка на сайт"
              target="_blank"
              rel="noopener noreferrer"
              className={cn('link')}
            >
              Перейти на сайт
            </a>
          }
        </div>
        )
      }
    </div>
  );
}
