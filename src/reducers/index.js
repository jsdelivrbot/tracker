import { combineReducers } from 'redux';
import ExercisesReducer from './reducers_exercises';

const rootReducer = combineReducers({
  exercises: ExercisesReducer
});

export default rootReducer;
