import React, { useState, useRef, useEffect } from 'react';

import bem from 'bem-cn';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { checkIsIOS } from '../../utils';

import './MobileSlider.css';

const cn = bem('mobile-images');

export default function MobileSlider({
  center,
  children,
}) {

  const [current, setCurrent] = useState(0);
  const [windowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const slider = useRef();
  const scroll = useRef();

  const isIOS = checkIsIOS();

  useEffect(() => {
    if (windowWidth < 1024) {
        setIsMobile(true);
    }
  }, [windowWidth]);

  const handleSwipe = n => {
    if (n > 2) {
      scroll.current.scrollLeft = n * 48;
    } else {
      scroll.current.scrollLeft = 0;
    }

    setCurrent(n);
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: false,
    dots: true,
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    speed: 500,
    touchThreshold: 10,
    accessibility: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
      },
      {
        breakpoint: 10000,
        settings: 'unslick'
      }
    ],
    beforeChange: (i, n) => handleSwipe(n),
  };

    

  const cards = React.Children.toArray(children);

  const filteredChildren = cards.filter(card => {
    if (isMobile && isIOS && !card.props.link) {
      return card.props.linkIOS;
    } else if (isMobile && !isIOS && !card.props.link) {
      return card.props.linkAndroid;
    }
    return card;
  });

    return (
      <>
        <div className={cn({ cen: center })} ref={scroll}>
          {filteredChildren.map((card, i) => (
            <div
              className={cn('image', { cur: i === current ? true : false })}
              style={{
                backgroundImage: `url(${card.props.image})`,
              }}
              key={i}
              onClick={() => slider.current.slickGoTo(i)} />
          ))}
          {!center &&
            <div className={cn('image')}>...</div>}
        </div>
        <Slider
          {...settings}
          ref={slider}
          className={'app__section-slider'}
        >
          {filteredChildren}
        </Slider>
      </>
    );
}
