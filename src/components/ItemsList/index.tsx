import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);

  const [name, setName] = useState('');

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };

  const handleNameImput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className={style.items_list__wrapper}>
      <div>
        <p> {chartItemsAmount ? `Количество товаров : ${chartItemsAmount}` : 'Корзина пуста'}</p>
        <button type="button" onClick={handleAddItemToChart}>
          Добавить в корзину
          <Button btnText="Добавить в корзину" handleClic={handleAddItemToChart} />
        </button>
      </div>
      {chartItemsAmount === 5 && <p>Корзина заполнена!</p>}
      <div>
        <p>{name || 'укажите имя'}</p>
        <input type="text" onChange={handleAddItemToChart} />
      </div>
    </div>
  );
};

export default ItemsList;
