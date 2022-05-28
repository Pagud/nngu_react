import React, { useEffect, useMemo, useState } from 'react';

const TestPageComponent = () => {
  const [counter, setCount] = useState(0);
  const [someArray, setSomeArray] = useState([1, 2, 3]);

  const updatedArray = useMemo(() => {
    return someArray.map((num) => {
      console.log('Hello');
      return num;
    });
  }, [someArray]);

  // componentDidMount
  useEffect(() => {
    console.log('компанент отображен');
  }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('компонент обновлён');
  // });

  // useEffect(() => {
  //   console.log('COUNTER обновлён');
  // }, [counter]);

  // useEffect(() => {
  //   console.log('COUNTER обновлён');
  // }, [someArray]);

  // useEffect(() => {
  //   console.log('COUNTER или SOME_ARRAY обновлён');
  // }, [counter, someArray]);

  // coponentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('Компонент был удалён');
  //   };
  // }, []);

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Увеличить counter
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      {updatedArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
