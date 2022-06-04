import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount }) => {
  const pageAmount = Math.ceil(itemsAmount / limit);
  const pagesArray = [];

  const navigate = useNavigate();

  for (let i = 0; i < pageAmount; i++) {
    pagesArray.push(i);
  }

  console.log(pageAmount);

  return (
    <div>
      {pagesArray.map((page) => (
        <button key={`key${page}`} type="button" onClick={() => navigate(`?page=${page}`)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
