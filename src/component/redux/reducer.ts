// src/store/reducer.ts
import { Action, ActionTypes } from './actions';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
