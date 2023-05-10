// This code exports a reducer function named SignInReducer. The reducer function takes in two arguments: state and action.
// It performs a switch statement based on the type property of the action object.
// If the type is "UPDATE_SIGN_IN", the reducer returns a new state object with a userToken property
// set to the userToken value provided in the payload property of the action object. If the type is not recognized,
// the reducer returns the current state unchanged.
// This reducer function is used to manage state related to sign-in within a React application.

export const SignInReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SIGN_IN":
      return {
        userToken: action.payload.userToken,
      };
    default:
      return state;
  }
};
