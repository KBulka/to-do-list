export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

interface IncrementAction {
  type: ActionTypes.INCREMENT;
}

interface DecrementAction {
  type: ActionTypes.DECREMENT;
}

export type Action = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: ActionTypes.INCREMENT });
export const decrement = (): DecrementAction => ({ type: ActionTypes.DECREMENT });
