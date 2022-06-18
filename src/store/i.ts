import { ITodosState } from '../entities/TodosPage/interfaces';
import { IUsersState } from './pages/UsersPage/interfaces';

export interface IStore {
  users: IUsersState;
  todos: ITodosState;
}
