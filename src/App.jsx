import React, { useEffect, useState } from 'react';

import bem from 'bem-cn';

import Banner from './components/Banner/Banner';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import MobileSlider from './components/MobileSlider/MobileSlider';
import Card from './components/Card/Card';
import Menu from './components/Menu/Menu';

import { apiUrl } from './urls';

import './App.css';

const cn = bem('app');

const renderCards = (cards) => {
  return (
    cards.map((card) => (
      <Card {...card} key={card.id} />
    ))
  );
};

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className={cn()}>
      <Banner />
      <Menu options={data} />
      {data.map(({ title, cards, page, btnText }) => (
        <div id={title} className={cn('section')} key={title}>
          <Heading
            text={title}
          />
          <MobileSlider center={cards.length < 5}>
            {renderCards(cards)}
          </MobileSlider>
          {page && <Button url={page} text={btnText} />}
        </div>
      ))}
    </div>
  );
}

export default App;
