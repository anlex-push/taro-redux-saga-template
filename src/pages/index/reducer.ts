import { AnyAction } from "redux";
import { rootSelectorFactory } from "../../utils/rootSelectorFactory";
import { addAction, minusAction } from "./action";
import update from "immutability-helper";

const INITIAL_STATE = {
  num: 0
}
  
export function indexPageReducer (state = INITIAL_STATE, action:AnyAction) {

  if(addAction.match(action)){
    return update(state, {
      num: { $set: state.num + 1 }
    });
  }

  if(minusAction.match(action)){
    return update(state, {
      num: { $set: state.num - 1 }
    });
  }

  return state;
}

export const indexPageSelector = rootSelectorFactory<typeof indexPageReducer>(__filenamespace);
