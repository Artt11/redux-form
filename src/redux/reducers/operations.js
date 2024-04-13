import { FORM_FULL, SUCCESS_MESSAGE, ERROR_MESSAGE } from "../actions/actions";

const initialState = {
  successMessage: "",
  errorMessage: "",
  value: {
    firstName: "",
    lastName: "",
    email: "",
  },
};
export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_FULL:
      const { firstName, lastName, email } = action.payload;
      const isEmpty = [];
      if (!firstName) isEmpty.push("First Name");
      if (!lastName) isEmpty.push("Last Name");
      if (!email) isEmpty.push("Email adress");

      if (isEmpty.length > 0) {
        return {
          ...state,
          successMessage: "",
          errorMessage: `Please enter an ${isEmpty}`,
        };
      } else {
        return {
          ...state,
          errorMessage: "",
          successMessage: "Thank you for registering!",
        };
      }

    case SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
        errorMessage: "",
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: "",
      };
    default:
      return state;
  }
};
