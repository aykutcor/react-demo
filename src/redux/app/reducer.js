import actions from "./actions";
import { getDefaultPath } from '../../helpers/url_sync';
const preKeys = getDefaultPath();

const initState = {
  current: preKeys,
};
export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_CURRENT:
      return {
        ...state,
        current: action.current,
      };
    case actions.CLEAR_MENU:
      return {
        ...state,
        openKeys: [],
        current: [],
      };
    default:
      return state;
  }
  return state;
}
