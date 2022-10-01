export const fetchAdvice = (advice) => {
  return {
    type: "ADVICE_FETCHED",
    payload: advice,
  };
};
