import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Pagination from '../../shared/Pagination';
import { fetchTodos } from './async-actions';
import TodosPageComponent from './components/TodosPageComponent';

const TodosPage = () => {
  const ITEMS_LIMIT = 5;
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();
  const currentPageNumber = new URLSearchParams(search).get('page');

  useEffect(() => {
    dispatch(fetchTodos({ _page: Number(currentPageNumber), _limit: ITEMS_LIMIT }));
  }, [currentPageNumber]);

  useEffect(() => {
    if (!search) {
      navigate('?page=1');
    }
  }, [navigate, search]);

  const { todosData, error, loading } = useAppSelector((store) => store.todos);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {loading ? <div>Загрузка...</div> : <TodosPageComponent todosData={todosData} />}
      <Pagination pagesCount={10} itemsAmount={5} limit={5} />
    </>
  );
};

export default TodosPage;
