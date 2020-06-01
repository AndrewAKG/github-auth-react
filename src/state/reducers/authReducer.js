const initialState = {
  isAuthUser: localStorage.getItem('USER_TOKEN')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNIN":
      return {
        isAuthUser: action.payload,
      };

    default:
      return state;
  }
};
