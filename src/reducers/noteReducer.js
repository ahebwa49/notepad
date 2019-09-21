const TOGGLE = "TOGGLE";
const defaultState = {
  toggled: false,
  title: "",
  content: ""
};

export const noteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE:
      const newState = Object.assign({}, defaultState, action.note);
      return newState;
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
};
