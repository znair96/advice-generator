import { combineReducers } from "redux";

const loadingAdviceReducer = (initialState = false, action) => {
  switch (action.type) {
    case "LOAD_ADVICE":
      return true;
    case "ADVICE_FETCHED":
      return false;
    default:
      return initialState;
  }
};

const fetchAdviceReducer = (
  initialState = { id: null, advice: "", error: null },
  action
) => {
  switch (action.type) {
    case "ADVICE_FETCHED":
      return {
        ...initialState,
        id: action.payload.id,
        advice: action.payload.advice,
      };
    case "ADVICE_FAILED":
      return { ...initialState, error: action.payload };
    default:
      return initialState;
  }
};

export const rootReducer = combineReducers({
  loading: loadingAdviceReducer,
  advicePayload: fetchAdviceReducer,
});
