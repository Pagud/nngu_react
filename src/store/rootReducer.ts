import { TodosReducer } from './../entities/TodosPage/reducer';
import { combineReducers } from 'redux';
import { UsersReducer } from './pages/UsersPage/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { type } from 'os';

const reducers = {
  users: UsersReducer,
  todos: TodosReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
