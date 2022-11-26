import { combineReducers } from 'redux';
import { managerReducer } from './managerReducer';

export const rootReducer = combineReducers({
 manager: managerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
