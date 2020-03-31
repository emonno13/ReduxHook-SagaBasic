const initialState = {
  age: 20,
  love: true
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "UP":
      newState.age += action.value;
      break;
    case "DOWN":
      newState.age -= action.value;
      break;
    case "CHANGE_YOUR_LOVE":
      newState.love = action.value;
      break;
    // Another Way
    // case "MINUS":
    //   return {
    //     ...state,
    //     age: state.age - action.value
    //   };
    default:
      break;
  }

  return newState;
};

export default reducer;
