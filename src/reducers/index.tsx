// Adding a reducer
// Reducers are just functions that generate changes by creating modified copies of our application's state


// Its function will be to ensure that increments raise the enthusiasm level by 1,
// and that decrements reduce the enthusiasm level by 1, but that the level never falls below 1.

import { EnthusiasmAction } from '../actions/index';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch(action.type){
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
  }
  return state;
}
