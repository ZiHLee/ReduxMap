export const GET_MAP = 'GET_MAP';
const SET_MAP = 'SET_MAP';
export const ADD_MAP = 'ADD_MAP';

export const getMap = () => ({
  type: GET_MAP,
});

export const setMap = map => ({
  type: SET_MAP,
  map,
});

export const addMap = map => ({
  type: ADD_MAP,
  city: map,
});

const initialState = {
  map: [],
  history: [],
};

export default (state = initialState, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }
  switch (action.type) {
    case SET_MAP:
      const {map} = action;
      return {...state, map: map};
    case ADD_MAP:
      return {
        ...state,
        history: [...state.history, action.city],
      };
    default:
      return state;
  }
};
