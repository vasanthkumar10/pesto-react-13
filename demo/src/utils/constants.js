// initialState
export const INITIALSTATE = 10;

// reducer fn -> place where events are defined
// action -> event + payload

export const reducer = (state = INITIALSTATE, action) => {
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - action.value;
    case "RESET":
      return INITIALSTATE;
    case "FACTORIAL":
      let factorial = 1;
      for (let i = 2; i <= action.value; i++) {
        factorial *= i;
      }
      return factorial;
    default:
      return state;
  }
};
