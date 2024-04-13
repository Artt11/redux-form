export const FORM_FULL = "FORM_FULL";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";

export const form_full = (payload) => {
  return {
    type: FORM_FULL,
    payload,
  };
};

export const setSuccessMessage = (message) => ({
  type: SUCCESS_MESSAGE,
  payload: message,
});

export const setErrorMessage = (message) => ({
  type: ERROR_MESSAGE,
  payload: message,
});
