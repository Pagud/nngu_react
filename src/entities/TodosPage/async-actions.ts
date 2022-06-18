import { IFetchTodosActions, TodosActionTypes } from './interfaces';
import { Dispatch } from 'redux';
import { TodosService } from './todos-service';

export const fetchTodos = ({ _page, _limit }: { _page: number; _limit: number }) => {
  return async (dispatch: Dispatch<IFetchTodosActions>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await TodosService.getTodos(_page, _limit);
      dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: TodosActionTypes.FETCH_TODOS_FAILURE, payload: 'Ошибка!' });
    }
  };
};
